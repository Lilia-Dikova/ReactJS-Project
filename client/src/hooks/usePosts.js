import { useEffect, useState } from 'react';

import postsAPI from '../api/posts-api';

export function useGetAllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await postsAPI.getAll();

            setPosts(result);

        })()
    }, [])

    return [posts, setPosts];
}

export function useGetOnePosts(postId) {
    const [post, setPost] = useState({})

    useEffect(() => {
        (async () => {
            const result = await postsAPI.getOne(postId);
            
            setPost(result)
        })();
    },[postId])

    return [post, setPost];
}

export function useCreatePosts() {
    const postCreateHandler = async (postData) => {
        const result = await postsAPI.create(postData);

        return result;
    }
    return postCreateHandler;

}

export function useGetOwnerPosts(userId) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await postsAPI.getOwnerPosts(userId);
            setPosts(result);
        })()
    }, [])
    return [posts, setPosts];
}