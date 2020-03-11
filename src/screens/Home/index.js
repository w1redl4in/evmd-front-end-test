import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { UserCard } from '../../components';

import { useDb } from '../../util/database';

import { userRequest, userProfile } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

function Home({ navigation }) {
  const db = useDb();
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        `select * from users;`,
        [],
        (_, { rows: { _array } }) => dispatch(userRequest(_array))
      );
    });
  }, []);

  function handleNavigateDetails(_id) {
    dispatch(userProfile(_id));
    navigation.navigate('Details');
  }

  return (
    <View
      style={styles.container}
    >
      <FlatList
        data={users}
        keyExtractor={item => item._id}
        renderItem={({ item }) => 
          <UserCard
            name={item.name}
            age={String(item.age)}
            email={item.email}
            picture={item.picture}
            onPress={() => handleNavigateDetails(item._id)}
          />
        }
      />
    </View>
  );
}

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
