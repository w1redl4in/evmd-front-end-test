import React from 'react';
// import axios from 'axios';
import {
  View, Text, StyleSheet, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const UserCard = ({
  name, email, age, picture, onPress,
}) => {
  // const requestedData = () => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .then((data) => console.log('D.A.T.A =>', data))
  //     .catch((error) => console.log(error));
  // };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Image
          source={{ uri: picture }}
          style={styles.image}
        />
      </View>
      <View>
        <Text>{`${name}, ${age}`}</Text>
        <Text>{email}</Text>
      </View>
    </TouchableOpacity>
  );
};

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
