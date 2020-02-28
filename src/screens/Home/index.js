import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { UserCard } from '../../components';

const Home = ({ navigation }) => (
  <View
    style={styles.container}
  >
    <UserCard
      name="Ighor"
      age="23"
      email="email@email.com.br"
      picture="http://placehold.it/1024x1024"
      onPress={() => {
        navigation.navigate('Details');
      }}
    />
  </View>
);

Home.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
