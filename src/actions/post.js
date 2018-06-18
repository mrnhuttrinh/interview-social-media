import {
  API_GET_POST_LIST,
  GET_POST_LIST,
  GET_POST,
  API_GET_POST,
  API_NEW_POST,
  CREATE_POST,
  UPDATE_POST,
  API_EDIT_POST,
  API_DELETE_POST,
  DELETE_POST
} from '../constants';

export const getOne = async (id) => {
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

export const create = async (data) => {
  return {
    type: CREATE_POST,
    fetchConfig: {
      path: API_NEW_POST,
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
    type: UPDATE_POST,
    fetchConfig: {
      path: API_EDIT_POST.replace(':id', data.id),
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
    type: DELETE_POST,
    fetchConfig: {
      path: API_DELETE_POST.replace(':id', id),
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