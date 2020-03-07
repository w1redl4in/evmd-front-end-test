import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { UserCard } from '../../components';


const Home = ({ navigation }) => {
  const user = useSelector((state) => state.users.user);
  return (
    <View
      style={styles.container}
    >
      <UserCard
        name={user.name}
        age={user.age}
        email={user.email}
        picture={user.picture}
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </View>
  );
};

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
