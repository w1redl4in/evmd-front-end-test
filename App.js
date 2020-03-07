import React, { useEffect, useCallback } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { CreateDatabase } from './src/scripts';
import usersReducer from './src/store/reducers/users';
import Routes from './src/routes';

const rootReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(rootReducer);

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
