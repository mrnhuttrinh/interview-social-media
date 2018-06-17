export const createActionReducer = (state, action, stateName) => {
  let childState;
  switch (action.type) {
    case `${action.orginalType}_START`:
      childState = state.get(stateName);
      return state.set(stateName, childState.set('requesting', true).delete('data').delete('error'));
    case `${action.orginalType}_COMPLETED`:
      childState = state.get(stateName);
      if (action.concat) {
        const data = childState.get('data') || [];
        return state.set(stateName, childState.set('requesting', false).set('data', data.concat(action.data)).delete('error'));
      } else {
        return state.set(stateName, childState.set('requesting', false).set('data', action.data).delete('error'));
      }
    case `${action.orginalType}_FAILED`:
      childState = state.get(stateName);
      if (action.keepData) {
        return state.set(stateName, childState.set('requesting', false).set('error', action.error));
      } else {
        return state.set(stateName, childState.set('requesting', false).set('error', action.error).delete('data'));
      }
    // default
    default:
      return state;
  }
}