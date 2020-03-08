/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  View, Image, StyleSheet, Text, TouchableOpacity,
} from 'react-native';

const Details = ({ route }) => {
  const { userId } = route.params;
  const user = useSelector((state) => state.users.user.find((u) => u._id === userId));

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
      {/* {users.map((user) => ( */}
      <View
        style={styles.detailsContainer}
        key={user._id}
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
          {user.balance}
        </Text>
        <Text>
          Latitude:&nbsp;
          {user.latitude}
        </Text>
        <Text>
          Longitude:&nbsp;
          {user.longitude}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            user.favorite = !user.favorite;
          }}
        >
          <Text>Favorito</Text>
        </TouchableOpacity>
      </View>
      {/* ))} */}
    </View>
  );
};

Details.propTypes = {
  route: PropTypes.oneOfType([PropTypes.object]).isRequired,
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
