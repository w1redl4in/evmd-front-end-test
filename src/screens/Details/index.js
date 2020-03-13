import React from 'react';
import {
  View, Image, StyleSheet, Text, TouchableOpacity,
} from 'react-native';

import { useDb } from '../../util/database';

import { useSelector } from 'react-redux';

function Details({ navigation }) {
  const db = useDb();
  const user = useSelector(state => state.userProfile);

  function handleFavorite(_id) {
    db.transaction(tx => {
      tx.executeSql(
        `update users set favorite = 1 where _id = ?;`,
        [_id],
        () => {
          navigation.goBack();
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
      <View
        style={styles.detailsContainer}
      >
        <Text>Nome: {user.name}</Text>
        <Text>E-mail: {user.email}</Text>
        <Text>Idade: {user.age}</Text>
        <Text>Salário: {user.balance}</Text>
        <Text>Latitude: {user.latitude}</Text>
        <Text>Longitude: {user.longitude}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleFavorite(user._id)}
      >
        <Text>
          Favorito
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f3f3f3',
  },
  detailsContainer: {
    width: '100%',
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    backgroundColor: '#e5e5e5',
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#b1b1b1',
    backgroundColor: '#e5e5e5',
  },
});

export default Details;
