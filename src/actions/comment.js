import {
  API_GET_POST_COMMENTS,
  GET_COMMENT_LIST,
} from '../constants';

export const getOne = () => {};

export const getList = (postId) => {
  return {
    type: GET_COMMENT_LIST,
    fetchConfig: {
      path: API_GET_POST_COMMENTS.replace(':id', postId),
      params: {
        method: 'GET'
      },
    }
  };
};

export const create = () => {};

export const update = () => {};

export const remove = () => {};