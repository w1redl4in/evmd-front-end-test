import React, { useEffect, useCallback } from 'react';
import { CreateDatabase } from './src/scripts';
import Routes from './src/routes';

import { Provider } from 'react-redux';
import store from './src/store';

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
