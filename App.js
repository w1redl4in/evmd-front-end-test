import React, { useEffect, useCallback } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

import { CreateDatabase } from './src/scripts';
import usersReducer from './src/store/reducers/users';
import Routes from './src/routes';
import { init } from './src/scripts/Database';

init()
  .then((data) => console.log('=) **^^DATABASE RUNNING^^** =)', data))
  .catch((err) => console.log('=( |-| DATABASE BROKEDOWN |-| **', err));


const rootReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(rootReducer, applyMiddleware(Thunk));

export default function App() {
  const initializeDB = useCallback(async () => {
    await CreateDatabase();
  });

  useEffect(() => {
    initializeDB();
  }, []);

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
