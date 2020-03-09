/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUsersAction } from '../../store/actions/users';
import { UserCard } from '../../components';


const Home = ({ navigation }) => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, [dispatch]);

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(userData) => userData._id}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <UserCard
              name={item.name}
              age={item.age}
              email={item.email}
              picture={item.picture}
              onPress={() => {
                navigation.navigate('Details', { userId: item._id });
                // navigation.setParam({ userId: item._id });
              }}
              // onViewDetail={() => {}}
            />
          </View>
        )}
      />
      {/* {users.map((user) => (
        <UserCard
          key={user._id}
          name={user.name}
          age={user.age}
          email={user.email}
          picture={user.picture}
          onPress={() => {
            console.log(user);
            navigation.navigate('Details');
          }}
        />
      ))} */}
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
