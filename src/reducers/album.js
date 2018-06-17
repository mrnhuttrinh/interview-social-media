import { Map } from 'immutable';
import {
  GET_ALBUM ,
  GET_ALBUM_LIST,
  CREATE_ALBUM,
  UPDATE_ALBUM,
  DELETE_ALBUM,
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
    case GET_ALBUM:
      return createActionReducer(state, action, 'one');
    case GET_ALBUM_LIST:
      return createActionReducer(state, action, 'list');
    case CREATE_ALBUM:
      return createActionReducer(state, action, 'create');
    case UPDATE_ALBUM:
      return createActionReducer(state, action, 'update');
    case DELETE_ALBUM:
      return createActionReducer(state, action, 'delete');
    default:
      return state;
  }
};
