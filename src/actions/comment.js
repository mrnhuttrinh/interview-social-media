import {
  API_GET_POST_COMMENTS,
  GET_COMMENT_LIST,
  API_NEW_COMMENT,
  API_EDIT_COMMENT,
  API_DELETE_COMMENT,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  UPDATE_LIST_COMMENT_UI,
} from '../constants';

export const getOne = () => {};

export const getList = async (postId) => {
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

export const create = async (data) => {
  return {
    type: CREATE_COMMENT,
    fetchConfig: {
      path: API_NEW_COMMENT,
      params: {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    }
  };
};

export const update = async (data) => {
  return {
    type: UPDATE_COMMENT,
    fetchConfig: {
      path: API_EDIT_COMMENT.replace(':id', data.id),
      params: {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    }
  };
};

export const remove = async (id) => {
  return {
    type: DELETE_COMMENT,
    fetchConfig: {
      path: API_DELETE_COMMENT.replace(':id', id),
      params: {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    }
  };
};

export const updateListCommentUI = async (data) => async dispatch => dispatch({
  type: UPDATE_LIST_COMMENT_UI,
  data,
})