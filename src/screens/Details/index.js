import React from 'react';
import { useSelector } from 'react-redux';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Details() {
  const user = useSelector(state => state.users);

  return (
    <View style={styles.container}>
      <View>
        {console.log(user.email)}
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
      <TouchableOpacity style={styles.button}>
        <Text>Favorito</Text>
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
