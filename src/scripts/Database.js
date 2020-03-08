import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('frontendtest.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (_id TEXT PRIMARY KEY, age INTEGER, name TEXT, email TEXT, latitude REAL, longitude REAL, balance REAL, picture TEXT, favorite INTEGER DEFAULT 0)',
        [],
        (_, result) => { resolve(result); },
        (_, err) => { reject(err); },
      );
    });
  });
  return promise;
};

// export const favoriteUser = () => {
//   const promise = new Promise((resolve, reject) => {
//     db.transaction((tx) => {
//       tx.executeSql(
//         'UPDATE users SET favorite = (CASE WHEN favorite = 0 THEN 1 else 0 END)',
//         [],
//         (_, result) => { resolve(result); },
//         (_, err) => { reject(err); },
//       );
//     });
//   });
//   return promise;
// };

export const fetchUsers = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users',
        [],
        (_, result) => { resolve(result); },
        (_, err) => { reject(err); },
      );
    });
  });
  return promise;
};
