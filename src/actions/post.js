import {
  API_GET_POST_LIST,
  GET_POST_LIST,
  GET_POST,
  API_GET_POST
} from '../constants';

export const getOne = (id) => {
  return {
    type: GET_POST,
    fetchConfig: {
      path: API_GET_POST.replace(':id', id),
      params: {
        method: 'GET'
      },
    }
  };
};

export const getList = (postfixUrl = '') => {
  return {
    type: GET_POST_LIST,
    showLoading: true,
    fetchConfig: {
      path: `${API_GET_POST_LIST}${postfixUrl}`,
      params: {
        method: 'GET'
      },
    }
  };
};

export const create = () => {};

export const update = () => {};

export const remove = () => {};