/* eslint-disable no-underscore-dangle */
import React from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { useSelector } from 'react-redux';

import * as SQLite from 'expo-sqlite';
import Constants from 'expo-constants';

import styles from './styles';

const { DB_NAME } = Constants.manifest.extra.env;

const db = SQLite.openDatabase(DB_NAME);

export default function Details() {
  const user = useSelector(state => state.users);

  function handleClickFav(id) {
    db.transaction(tx => {
      tx.executeSql(
        `update users set favorite = favorite + 1 where _id = ?`,
        [id],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            Alert.alert('Usuário favoritado');
          } else {
            Alert.alert('Falha ao favoritar');
          }
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: user.picture,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text>Nome: {user.name}</Text>
        <Text>E-mail: {user.email}</Text>
        <Text>Idade: {user.age}</Text>
        <Text>Salário: {user.balance}</Text>
        <Text>Latitude: {user.latitude}</Text>
        <Text>Longitude: {user.longitude}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleClickFav(user.id);
        }}
      >
        <Text>Favorito</Text>
      </TouchableOpacity>
    </View>
  );
}
