import {
  API_GET_ALBUM_LIST,
  GET_ALBUM_LIST,

  API_GET_ALBUM,
  GET_ALBUM
} from '../constants';

export const getOne = (id) => {
  return {
    type: GET_ALBUM,
    fetchConfig: {
      path: API_GET_ALBUM.replace(':id', id),
      params: {
        method: 'GET'
      },
    }
  };
};

export const getList = (postfixUrl = '') => {
  return {
    type: GET_ALBUM_LIST,
    showLoading: true,
    fetchConfig: {
      path: `${API_GET_ALBUM_LIST}${postfixUrl}`,
      params: {
        method: 'GET'
      },
    }
  };
};
export const create = () => {};

export const update = () => {};

export const remove = () => {};