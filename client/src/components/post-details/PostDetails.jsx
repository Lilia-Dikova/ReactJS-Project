import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { useGetOnePosts } from '../../hooks/usePosts';
import { useForm } from '../../hooks/useForm';
import { useCreateComments, useGetAllComments } from '../../hooks/useComments';

import { commentData } from '../../util/form-util';
import PostDetailsButtons from './post-details-buttons/PostDetailsButtons';

export default function PostDetails() {

    const fields = commentData.fields;
    const formInitialValues = commentData.form;


    const { postId } = useParams();
    const [comments, dispatch] = useGetAllComments(postId);
    const [post, setPost] = useGetOnePosts(postId);

    const { isAuthenticated, username, userId } = useAuthContext();

    const createComment = useCreateComments()
    const commentHandler = async ({ comment }) => {
        try {
            const newComment = await createComment(postId, comment);
            dispatch({ type: 'ADD_COMMENT', payload: { ...newComment, author: { username } } });

        } catch (err) {
            console.log(err.message)
        }
    }

    const { values, changeHandler, submitHandler } = useForm(formInitialValues, commentHandler);

    const isAuthor = userId === post._ownerId;

    return (
        <div className="details">
            <div className="container">
                <h1>{post.title}</h1>
                <div className="image-and-details">
                    <img src={post.imageUrl} alt="#" />
                </div>
                <div className="card-body">
                    <div className="text-details">
                        <h2>Pet Name: {post.name}</h2>
                        <h2>Age: {post.age}</h2>
                        <h2>Nickname: {post.nickName}</h2>
                    </div>
                    <p className="card-text">{post.content}</p>
                    {isAuthor &&
                        <PostDetailsButtons postId={postId}/>
                    }
                </div>
                <div className="comment_card">
                    <div className="card-header">
                        <h2>Comments</h2>
                    </div>
                    <div className="card-body">
                        <div className="mt-4 text_align_left">
                            {comments.map((comment) => (
                                <div key={comment._id} className="card mb-2">
                                    <div className="card-body">
                                        <p className="card-text">{comment.text}</p>
                                        <label htmlFor="user">{comment.author.username}</label>
                                    </div>
                                </div>
                            ))}
                            {isAuthenticated &&
                                <form onSubmit={submitHandler}>
                                    <div className="mb-3">
                                        <label htmlFor="comment" className="form-label">Post a comment</label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            name={fields.comment}
                                            value={values.comment}
                                            onChange={changeHandler}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="read_more_blog">Submit</button>
                                </form>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
