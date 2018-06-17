import { Map } from 'immutable';
import {
  GET_PHOTO ,
  GET_PHOTO_LIST,
  CREATE_PHOTO,
  UPDATE_PHOTO,
  DELETE_PHOTO,
} from '../constants';

import { createActionReducer } from '../utils';

const initialState = new Map({
  one: new Map(),
  list: new Map(),
  create: new Map(),
  update: new Map(),
  delete: new Map(),
});

export default (state = initialState, action = {}) => {
  switch (action.orginalType) {
    // one
    case GET_PHOTO:
      return createActionReducer(state, action, 'one');
    case GET_PHOTO_LIST:
      return createActionReducer(state, action, 'list');
    case CREATE_PHOTO:
      return createActionReducer(state, action, 'create');
    case UPDATE_PHOTO:
      return createActionReducer(state, action, 'update');
    case DELETE_PHOTO:
      return createActionReducer(state, action, 'delete');
    default:
      return state;
  }
};
