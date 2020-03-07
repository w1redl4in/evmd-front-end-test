import React from 'react';
import { useSelector } from 'react-redux';
import {
  View, Image, StyleSheet, Text, TouchableOpacity,
} from 'react-native';

const Details = () => {
  const user = useSelector((state) => state.users.user);

  return (
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
        <Text>
          Nome:&nbsp;
          {user.name}
        </Text>
        <Text>
          E-mail:&nbsp;
          {user.email}
        </Text>
        <Text>
          Idade:&nbsp;
          {user.age}
        </Text>
        <Text>
          Salário:&nbsp;
          {user.paycheck}
        </Text>
        <Text>
          Latitude:&nbsp;
          {user.latitude}
        </Text>
        <Text>
          Longitude:&nbsp;
          {user.longitude}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
      >
        <Text>
          Favorito
          {user.favorite}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

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
