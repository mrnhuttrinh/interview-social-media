import { Map } from 'immutable';
import {
  GET_COMMENT ,
  GET_COMMENT_LIST,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  UPDATE_LIST_COMMENT_UI,
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
  if (action.orginalType) {
    switch (action.orginalType) {
      // one
      case GET_COMMENT:
        return createActionReducer(state, action, 'one');
      case GET_COMMENT_LIST:
        return createActionReducer(state, action, 'list');
      case CREATE_COMMENT:
        return createActionReducer(state, action, 'create');
      case UPDATE_COMMENT:
        return createActionReducer(state, action, 'update');
      case DELETE_COMMENT:
        return createActionReducer(state, action, 'delete');
      default:
        return state;
    }
  } else {
    let childState;
    switch (action.type) {
      case UPDATE_LIST_COMMENT_UI:
        childState = state.get('list');
        return state.set('list', childState.set('data', action.data));
      default:
        return state;
    }
  }
};
