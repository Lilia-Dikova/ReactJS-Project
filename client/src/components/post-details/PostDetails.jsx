import React, { useEffect, useState } from 'react';
import blogAPI from '../../api/posts-api';
import { useParams } from 'react-router-dom';

export default function PostDetails() {

    
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            setComments([...comments, comment]);
            setComment('');
        }
    };

  const [post, setPost] = useState({})
  const { postId } = useParams();

   useEffect(() => {
    (async()=> {
        const result = await blogAPI.getOne(postId);
        setPost(result)
    })()
   })

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
                    <div className="d-flex justify-content-center my-4">
                        <button className="read_more_blog mr-4">Edit</button>
                        <button className="read_more_blog mr-4">Delete</button>
                        <button className="read_more_blog mr-4">Like</button>
                    </div>
                    <h3>Post by: username</h3>
                </div>

                <div className="comment_card">
                    <div className="card-header">
                        <h2>Comments</h2>
                    </div>
                    <div className="card-body">
                        <div className="mt-4 text_align_left">
                            {comments.map((comment, index) => (
                                <div key={index} className="card mb-2">
                                    <div className="card-body">
                                        <p className="card-text">{comment}</p>
                                        <label htmlFor="user">username</label>
                                    </div>
                                </div>
                            ))}
                            <form onSubmit={handleCommentSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="comment" className="form-label">Post a comment</label>
                                    <textarea
                                        className="form-control"
                                        id="comment"
                                        rows="3"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="read_more_blog">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
