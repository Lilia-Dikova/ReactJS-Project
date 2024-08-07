import requester from "./requester";

const BASE_URL = 'http://localhost:3030/data/posts'

const getAll = async () => {

    const result = await requester.get(BASE_URL);
    const posts = Object.values(result);

    return posts;
}

const getOne = (postId) => requester.get(`${BASE_URL}/${postId}`);

const create = (postData) => requester.post(`${BASE_URL}`, postData);

const remove = (postId) => requester.del(`${BASE_URL}/${postId}`);

const update = (postId, postData) => requester.put(`${BASE_URL}/${postId}`, postData)


const postsAPI = {
    getAll,
    getOne,
    create,
    remove,
    update,
}

export default postsAPI;


