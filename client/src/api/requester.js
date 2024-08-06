import { getAccessToken } from "../util/auth-util";

async function requester(method, url, data) {

    const options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const accessToken = getAccessToken();

    if (accessToken) {
        options.headers['X-Authorization'] = accessToken;
    }

    // try {
        const response = await fetch(url, options);
        
            if (!response.ok) {
                if (response.status == 403) {
                    localStorage.removeItem('auth');
                }
                const err = await response.json();
                throw new Error (err.message)
            }

            if (response.status == 204) {
                return response;
            } else {
                return response.json();
            }

    // } catch (err) {
    //     throw err.message
    // }
}

const get = requester.bind(null, 'GET');
const post = requester.bind(null, 'POST');
const put = requester.bind(null, 'PUT');
const del = requester.bind(null, 'DELETE');

export default {
    get,
    post,
    put,
    del
}