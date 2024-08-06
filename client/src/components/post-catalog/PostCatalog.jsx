
import {useGetAllPosts} from '../../hooks/usePosts';
import PostCatalogItem from './post-catalog-item/PostCatalogItem';


export default function PostCatalog() {

    const [posts] = useGetAllPosts();


    return (
        <div className="full_custom">
            <div className="details">
                {posts.length > 0
                    ? <div className="row d-flex text_align_center">
                         {posts.map(post => <PostCatalogItem key={post._id} {...post} />)}
                    </div>
                    : <h1>There are no posts yet.</h1>
                }
            </div>
        </div>
    );
}
