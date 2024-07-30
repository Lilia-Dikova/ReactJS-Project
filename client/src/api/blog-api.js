import requester from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/stories'

export const getAll  = async () => {
    const result = await requester.get(BASE_URL);

    const posts = Object.values(result);

    return posts;
}

const blogAPI = {
    getAll,
}

export default blogAPI;


