import types from './types';

function userRequest(users) {
  return {
    type: types.USER_REQUEST,
    payload: {
      users,
    }
  }
};

function userProfile(_id) {
  return {
    type: types.USER_PROFILE,
    payload: {
      _id,
    }
  }
};

export { userRequest, userProfile };