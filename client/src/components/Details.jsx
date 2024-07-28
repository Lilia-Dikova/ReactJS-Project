import React, { useState } from 'react';

export default function Details() {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            setComments([...comments, comment]);
            setComment('');
        }
    };

    const blogPost = {
        date: '02 Feb',
        img: 'images/banner.png',
        title: 'Some Tips for Planning a Perfect Summer Vacation',
        content: `All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                  making this the first true generator on the Internet. It uses a dictionary of over 200 Latin 
                  words, combined with all the Lorem Ipsum generators on the Internet tend to repeat predefined 
                  chunks as necessary, making this the first true generator on the Internet. It uses a dictionary 
                  of over 200 Latin words, combined with all the Lorem Ipsum generators on the Internet tend to 
                  repeat predefined chunks as necessary, making this the first true generator on the Internet. It 
                  uses a dictionary of over 200 Latin words, combined with.`
    };

    const details = {
        age: '25',
        name: 'John Doe',
        nickname: 'Johnny'
    };

    return (
        <div className="details">
            <div className="container">
                <h1>{blogPost.title}</h1>
                <div className="image-and-details">
                    <img src={blogPost.img} alt="#" />
                </div>
                <div className="card-body">
                    <p className="card-text">{blogPost.content}</p>
                    <div className="d-flex justify-content-center my-4">
                        <button className="read_more_blog mr-4">Edit</button>
                        <button className="read_more_blog mr-4">Delete</button>
                        <button className="read_more_blog mr-4">Like</button>
                    </div>
                </div>

                <div className="comment_card">
                    <div className="card-header">
                        <h2>Comments</h2>
                    </div>
                    <div className="card-body">
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
                        <div className="mt-4">
                            {comments.map((comment, index) => (
                                <div key={index} className="card mb-2">
                                    <div className="card-body">
                                        <p className="card-text">{comment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
