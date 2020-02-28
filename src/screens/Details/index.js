import React from 'react';
import {
  View, Image, StyleSheet, Text, TouchableOpacity,
} from 'react-native';

const Details = () => (
  <View style={styles.container}>
    <View>
      <Image
        source={{
          uri: 'http://placehold.it/1024x1024',
        }}
        style={styles.image}
      />
    </View>
    <View
      style={styles.detailsContainer}
    >
      <Text>Nome: Ighor</Text>
      <Text>E-mail: email@email.com</Text>
      <Text>Idade: 23</Text>
      <Text>Salário: 1,767.09</Text>
      <Text>Latitude: 66.701576</Text>
      <Text>Longitude: 178.865541</Text>
    </View>
    <TouchableOpacity
      style={styles.button}
    >
      <Text>
        Favorito
      </Text>
    </TouchableOpacity>
  </View>
);

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
