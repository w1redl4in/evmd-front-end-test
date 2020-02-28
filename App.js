import React, { useEffect, useCallback } from 'react';
import { CreateDatabase } from './src/scripts';
import Routes from './src/routes';

export default function App() {
  // teste
  const initializeDB = useCallback(async () => {
    await CreateDatabase();
  });

  useEffect(() => {
    initializeDB();
  }, []);

  return (
    <Routes />
  );
}
