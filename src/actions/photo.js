import {
  API_GET_ALBUM_PHOTOS,
  GET_PHOTO_LIST,
  API_GET_PHOTO,
  GET_PHOTO,
} from '../constants';

export const getOne = async (id) => {
  return {
    type: GET_PHOTO,
    fetchConfig: {
      path: API_GET_PHOTO.replace(':id', id),
      params: {
        method: 'GET'
      },
    }
  };
};

export const getList = (albumId) => {
  return {
    type: GET_PHOTO_LIST,
    fetchConfig: {
      path: API_GET_ALBUM_PHOTOS.replace(':id', albumId),
      params: {
        method: 'GET'
      },
    }
  };
};

export const create = () => {};

export const update = () => {};

export const remove = () => {};