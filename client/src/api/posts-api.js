import requester from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/stories'

const getAll  = async () => {
    const result = await requester.get(BASE_URL);

    const posts = Object.values(result);

    return posts;
}

const getOne = (postId) => requester.get(`${BASE_URL}/${postId}`);

const postsAPI = {
    getAll,
    getOne
}

export default postsAPI;


