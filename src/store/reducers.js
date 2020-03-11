import types from './types';

const INITIAL_STATE = {
  users: [],
  userProfile: {},
}

function users(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.USER_REQUEST:
      return { ...state, users: action.payload.users };
    case types.USER_PROFILE:
      const index = state.users.findIndex(user => user._id === action.payload._id);
      return { ...state, userProfile: state.users[index] };
    default:
      return state;
  }
}

export { users };