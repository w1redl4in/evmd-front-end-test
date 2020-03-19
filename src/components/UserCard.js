import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('front-end-test.db');

function get() {
  db.transaction(tx => {
    tx.executeSql('select * from users', [], (trans, result) => {
      // eslint-disable-next-line no-underscore-dangle
      console.log(result.rows._array);
    });
  });
}

get();

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
