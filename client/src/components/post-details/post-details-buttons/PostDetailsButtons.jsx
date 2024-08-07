import { Link, useNavigate, useParams } from "react-router-dom";
import postsAPI from "../../../api/posts-api"

export default function PostDetailsButtons({
    postId
}) {

    const navigate = useNavigate();

    const deleteHandler = async () => {
        console.log(postId)
        try {
            await postsAPI.remove(postId);
            navigate('/')
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className="d-flex justify-content-center my-4">
            <Link to={`/catalog/edit/${postId}`} className="read_more_blog  mr-4">Edit</Link>
            <a onClick={deleteHandler} className="read_more_blog  mr-4">Delete</a>
        </div>
    )
}