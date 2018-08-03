
/**
 * Global reducers
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

// the section import the reducer of components
import mainLoading from './mainLoading';
import album from './album';
import comment from './comment';
import photo from './photo';
import post from './post';
import user from './user';
import { reducers as componentsReducers } from '../components';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  mainLoading,
  album,
  comment,
  photo,
  post,
  user,
  ...componentsReducers,
});

export default rootReducer;
