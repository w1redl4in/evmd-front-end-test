import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import SQLiteLib from 'react-native-sqlite-storage';

function errorCB(err) {
  console.log('SQL Error: ' + err);
}

function successCB() {
  console.log('SQL executed fine');
}

function openCB() {
  console.log('Database OPENED');
}

const db = SQLiteLib.openDatabase(
  'front-end-test.db.db',
  '1.0',
  'Test Database',
  200000,
  openCB,
  errorCB
);
db.transaction(tx => {
  tx.executeSql('SELECT * FROM users u', [], (tx, results) => {
    console.log('Query completed');

    // Get rows with Web SQL Database spec compliance.

    const len = results.rows.length;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < len; i++) {
      const row = results.rows.item(i);
      console.log(`Employee name: ${row.name}`);
    }

    // Alternatively, you can use the non-standard raw method.

    /*
        let rows = results.rows.raw(); // shallow copy of rows Array

        rows.map(row => console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`));
      */
  });
});
const UserCard = ({ name, email, age, picture, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View>
      <Image source={{ uri: picture }} style={styles.image} />
    </View>
    <View>
      <Text>{`${name}, ${age}`}</Text>
      <Text>{email}</Text>
    </View>
  </TouchableOpacity>
);

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    borderColor: '#e9e9e9',
  },
  image: {
    borderRadius: 5,
    width: 50,
    height: 50,
  },
});

export default UserCard;
