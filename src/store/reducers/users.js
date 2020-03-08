import { FETCH_USERS } from '../actions/users';

const initialState = {
  user: [{
    _id: '1',
    name: 'Zé',
    email: 'ze@ze.com',
    age: '99',
    picture: 'http://placehold.it/1024x1024',
    balance: 9999.99,
    latitude: 123,
    longitude: 100,
    favorite: false,
  }, {
    _id: '2',
    name: 'Maria',
    email: 'maria@maria.com',
    age: '11',
    picture: 'http://placehold.it/1024x1024',
    balance: 1111.11,
    latitude: -80,
    longitude: 120,
    favorite: false,
  }, {
    _id: '3',
    name: 'Marcio',
    email: 'mafideju@outlook.com',
    age: '36',
    picture: 'http://placehold.it/1024x1024',
    balance: 500.69,
    latitude: -23,
    longitude: -46,
    favorite: false,
  }],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        user: [...state, state.users],
      };
    default:
      return state;
  }
};

export default usersReducer;
