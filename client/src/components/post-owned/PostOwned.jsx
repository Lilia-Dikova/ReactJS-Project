
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import {useGetAllPosts, useGetOwnerPosts} from '../../hooks/usePosts';
import PostOwnedItem from './post-owned-item/PostOwnedItem';

export default function PostOwned() {

    const {userId} = useAuthContext()
    const [posts] = useGetOwnerPosts(userId);


    return (
        <div className="full_custom">
            <div className="details">
                {posts.length > 0
                    ? <div className="row d-flex text_align_center">
                         {posts.map(post => <PostOwnedItem key={post._id} {...post} />)}
                    </div>
                    : 
                    <div className='posts'>
                        <h1>You have not made any posts yet.</h1>
                  
                    <Link
                        className="send_btn"
                        to={'/create'}
                    >
                        Create Post
                    </Link>
                    </div>
                }
            </div>
        </div>
    );
}
