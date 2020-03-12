export const Types = {
  CHOOSE_USER: 'users/CHOOSE_USER',
};

// Reducers
const INITIAL_STATE = [];

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CHOOSE_USER:
      return {
        id: action.payload.user.id,
        picture: action.payload.user.picture,
        name: action.payload.user.name,
        email: action.payload.user.email,
        age: action.payload.user.age,
        balance: action.payload.user.balance,
        latitude: action.payload.user.latitude,
        longitude: action.payload.user.longitude,
      };
    default:
      return state;
  }
}

export const Creators = {
  chooseUser: user => ({
    type: Types.CHOOSE_USER,
    payload: {
      user,
    },
  }),
};
