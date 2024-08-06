import requester from "./requester";

const BASE_URL = "http://localhost:3030/data/comments";

const create = (postId, text) => {
  const result = requester.post(BASE_URL, { postId, text });
  return result;
};

const getAllComments = (postId) => {
  const params = new URLSearchParams({
    where: `postId="${postId}"`,
    load: `author=_ownerId:users`,
  });
  return requester.get(`${BASE_URL}?${params.toString()}`);
};

const commentsAPI = {
  create,
  getAllComments,
};

export default commentsAPI;