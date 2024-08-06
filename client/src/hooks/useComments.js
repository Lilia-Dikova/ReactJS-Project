import { useEffect, useReducer, useState } from "react";

import commentsAPI from "../api/comments-api";

export const useCreateComments = () => {
    const createCommentHandler = (postId, comment) =>
        commentsAPI.create(postId, comment)
    return createCommentHandler;
}

function commentsReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL':
            return action.payload.slice();

        case 'ADD_COMMENT':
            return [...state, action.payload];

        default:
            return state;
    }
}



    export const useGetAllComments = (postId) => {
        const [comments, dispatch] = useReducer(commentsReducer, [])

        useEffect(() => {
            (async () => {
                const result = await commentsAPI.getAllComments(postId)
                dispatch({ type: 'GET_ALL', payload: result });

            })()
        }, [postId])
        return [comments, dispatch]
    }