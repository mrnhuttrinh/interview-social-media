import { Map } from 'immutable';
import {
  GET_POST ,
  GET_POST_LIST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
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
    case GET_POST:
      return createActionReducer(state, action, 'one');
    case GET_POST_LIST:
      return createActionReducer(state, action, 'list');
    case CREATE_POST:
      return createActionReducer(state, action, 'create');
    case UPDATE_POST:
      return createActionReducer(state, action, 'update');
    case DELETE_POST:
      return createActionReducer(state, action, 'delete');
    default:
      return state;
  }
};
