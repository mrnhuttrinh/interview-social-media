import { Map } from 'immutable';
import {
  GET_USER ,
  GET_USER_LIST,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
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
    case GET_USER:
      return createActionReducer(state, action, 'one');
    case GET_USER_LIST:
      return createActionReducer(state, action, 'list');
    case CREATE_USER:
      return createActionReducer(state, action, 'create');
    case UPDATE_USER:
      return createActionReducer(state, action, 'update');
    case DELETE_USER:
      return createActionReducer(state, action, 'delete');
    default:
      return state;
  }
};
