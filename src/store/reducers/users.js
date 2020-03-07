const initialState = {
  user: {
    id: 1,
    name: 'Zé',
    email: 'ze@ze.com',
    age: '99',
    picture: 'http://placehold.it/1024x1024',
    paycheck: 9999.99,
    latitude: -23,
    longitude: -46,
    favorite: true,
  },
};

const usersReducer = (state = initialState, action) => state;

export default usersReducer;
