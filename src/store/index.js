import { createStore } from 'redux';
import { users } from './reducers';

const store = createStore(users);

export default store;