import {
  API_GET_USER_LIST,
  GET_USER_LIST,
  API_GET_USER,
  GET_USER
} from '../constants';

export const getOne = (id) => {
  return {
    type: GET_USER,
    showLoading: true,
    fetchConfig: {
      path: API_GET_USER.replace(':id', id),
      params: {
        method: 'GET'
      },
    }
  };
};

export const getList = (page=0, limit=10) => {
  return {
    type: GET_USER_LIST,
    showLoading: true,
    others: {
      concat: true,
    },
    fetchConfig: {
      path: `${API_GET_USER_LIST}?_page=${page}&_limit=${limit}`,
      params: {
        method: 'GET'
      },
    }
  };
};

export const create = () => {};

export const update = () => {};

export const remove = () => {};
