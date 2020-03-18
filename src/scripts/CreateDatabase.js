import * as FileSystem from 'expo-file-system';
import Constants from 'expo-constants';
import { Asset } from 'expo-asset';

const db = require('../assets/front-end-test.db');

const { DB_NAME } = Constants.manifest.extra.env;

const DB_URI = `${FileSystem.documentDirectory}SQLite/${DB_NAME}`;

export default async () => {
  try {
    const info = await FileSystem.getInfoAsync(DB_URI);

    if (!info.exists) {
      FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}SQLite`);
      await FileSystem.downloadAsync(Asset.fromModule(db).uri, DB_URI);
    }
  } catch (e) {
    console.log('error', e);
  }
};
