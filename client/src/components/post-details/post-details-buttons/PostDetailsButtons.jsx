import { Link, useNavigate, useParams } from "react-router-dom";
import postsAPI from "../../../api/posts-api"
import { useState } from "react";

export default function PostDetailsButtons({
    postId
}) {

    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false)

    const deleteHandler = async () => {
        console.log(postId)
        try {
            await postsAPI.remove(postId);
            navigate('/catalog')
        } catch (err) {
            console.log(err.message)
        }
    }

    const abordDelete =()=> {
        setShowModal(false)
    }

    const onDeleteAction = () => {
        setShowModal(true);


    }

    return (

        <div className="d-flex justify-content-center my-4">
            <Link to={`/catalog/edit/${postId}`} className="read_more_blog  mr-4">Edit</Link>
            <a onClick={onDeleteAction} className="read_more_blog  mr-4">Delete</a>
            {showModal && <div className="modal-backdrop">
                <div className="modal-content">

                    <div className="errorContainer">
                        <p>Are you sure you want to proceed?</p>
                        <button onClick={abordDelete} className="btn-no">No</button>
                        <button onClick={deleteHandler} className="btn-yes" >Yes</button>
                    </div>
                </div>
            </div> }
        </div>
    )
}