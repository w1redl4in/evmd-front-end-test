/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  View, Image, StyleSheet, Text, TouchableOpacity, FlatList,
} from 'react-native';

const Details = () => {
  const users = useSelector((state) => state.users.user);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(userData) => userData._id}
        renderItem={({ item }) => (
          <View
            style={styles.detailsContainer}
            key={item._id}
          >
            <Image
              source={{
                uri: 'http://placehold.it/1024x1024',
              }}
              style={styles.image}
            />
            <Text>
              Nome:&nbsp;
              {item.name}
            </Text>
            <Text>
              E-mail:&nbsp;
              {item.email}
            </Text>
            <Text>
              Idade:&nbsp;
              {item.age}
            </Text>
            <Text>
              Salário:&nbsp;
              {item.balance}
            </Text>
            <Text>
              Latitude:&nbsp;
              {item.latitude}
            </Text>
            <Text>
              Longitude:&nbsp;
              {item.longitude}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                console.log(item.favorite);
                item.favorite = !item.favorite;
              }}
            >
              <Text>Favorito</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
