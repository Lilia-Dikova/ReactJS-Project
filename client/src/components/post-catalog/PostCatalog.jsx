import BlogCatalogItem from './post-catalog-item/PostCatalogItem';
import {useGetAllPosts} from '../../hooks/usePosts';


export default function PostCatalog() {

    const [posts] = useGetAllPosts();


    return (
        <div className="full_custom">
            <div className="details">
                {posts.length > 0
                    ? <div className="row d-flex text_align_center">
                         {posts.map(post => <BlogCatalogItem key={post._id} {...post} />)}
                    </div>
                    : <h1>There are no posts yet.</h1>
                }
            </div>
        </div>
    );
}
