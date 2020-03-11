import Constants from 'expo-constants';
import * as SQLite from 'expo-sqlite';

const { DB_NAME } = Constants.manifest.extra.env;

function useDb() {
  return SQLite.openDatabase(DB_NAME);
}

export { useDb };