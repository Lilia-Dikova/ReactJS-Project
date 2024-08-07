import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useGetOnePosts } from "../../hooks/usePosts";

import { blogData } from "../../util/form-util";
import postsAPI from "../../api/posts-api";


export default function PostEdit() {

    const navigate = useNavigate();
    const fields = blogData.fields;
    const initialValues = blogData.form
    const [error, setError] = useState(false)


    const { postId } = useParams();
    const [post] = useGetOnePosts(postId);

    const formInitialValues = useMemo(() => Object.assign({}, initialValues, post), [post]);

    const updateHandler = async (values) => {
        if (values.name.trim() == '' || values.nickName.trim() == '' || values.age.trim() == '' ||
            values.title.trim() == '' || values.imageUrl.trim() == '' || values.content.trim() == '') {

            return setError('Please, fill out all fields!')
        }

        if (values.age < 0) {
            return setError('Please, use positive number for age!')
        }

        try {
            await postsAPI.update(postId, values);
            navigate(`/catalog/details/${postId}`)
        } catch (err) {
            return setError(err.message)
        }
    }

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(formInitialValues, updateHandler)

    return (
        <div className="details">
            {error && <div className='errorContainer'>
                <p>{error}</p>
            </div>
            }
            <div className="container">
                <div className="col-md-12">
                    <h1>Edit your post</h1>
                    <form id="request" className="main_form" onSubmit={submitHandler} >
                        <div className="row">
                            <div className="col-md-12 ">
                                <input
                                    className="form_control"
                                    placeholder="Pet Name"
                                    type="text"
                                    name={fields.name}
                                    value={values.name}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="col-md-12">
                                <input
                                    className="form_control"
                                    placeholder="Pet Nickname"
                                    type="text"
                                    name={fields.nickName}
                                    value={values.nickName}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="col-md-12">
                                <input
                                    className="form_control"
                                    placeholder="Age"
                                    type="number"
                                    name={fields.age}
                                    value={values.age}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="col-md-12">
                                <input
                                    className="form_control"
                                    placeholder="Story Title"
                                    type="text"
                                    name={fields.title}
                                    value={values.title}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="col-md-12">
                                <input
                                    className="form_control"
                                    placeholder="Share your image link"
                                    type="url"
                                    name={fields.imageUrl}
                                    value={values.imageUrl}
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className="col-md-12">
                                <textarea
                                    className="textarea"
                                    placeholder="Story"
                                    type="text"
                                    name={fields.content}
                                    value={values.content}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="send_btn">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


