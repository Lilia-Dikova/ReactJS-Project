import React, { useEffect, useState } from 'react';

import blogAPI from '../../api/blog-api';

import CatalogItem from './catalog-item/CatalogItem';


export default function Catalog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await blogAPI.getAll();

            setPosts(result);
        
        })()
    }, [])


    return (
        <div className="full_custom">
            <div className="details">
                {posts.length > 0
                    ? <div className="row d-flex text_align_center">
                         {posts.map(post => <CatalogItem key={post._id} {...post} />)}
                    </div>
                    : <h1>There are no posts yet.</h1>
                }
            </div>
        </div>
    );
}
