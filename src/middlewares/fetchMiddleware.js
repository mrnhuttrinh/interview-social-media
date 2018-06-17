import {
  mainLoadingStart,
  mainLoadingEnd,
  mainLoadingError,
} from '../actions';

const fetchMiddleware = store => next => async action => {
  if (!action || !action.fetchConfig) {
    return next(action);
  }

  const dispatch = store.dispatch;
  const config = action.fetchConfig;
  const type = action.type;
  const path = config.path;
  const params = { ...config.params, credentials: 'include' };

  // for main loading
  const showLoading = action.showLoading || false;
  // can be add authenticate to fetch
  try {
    // dispatch start fetch
    dispatch({ orginalType: type, type: `${type}_START`, ...action.others });
    if (showLoading) {
      dispatch(mainLoadingStart());
    }
    const data = await fetch(path, params).then(async (res) => {
      if (res.status >= 400) {
        throw res;
      }
      return res.json();
    });
    // dispatch completed with data
    await dispatch({ orginalType: type, type: `${type}_COMPLETED`, data, ...action.others });
    if (showLoading) {
      dispatch(mainLoadingEnd());
    }
  } catch (error) {
    await dispatch({ orginalType: type, type: `${type}_FAILED`, error});
    if (showLoading) {
      dispatch(mainLoadingError());
    }
  }
}

export default fetchMiddleware;
