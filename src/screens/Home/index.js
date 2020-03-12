import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  YellowBox,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as SQLite from 'expo-sqlite';
import Constants from 'expo-constants';

import { UserCard } from '../../components';
import styles from './styles';

import { Creators as UserActions } from '../../store/ducks/users';

const { DB_NAME } = Constants.manifest.extra.env;

const db = SQLite.openDatabase(DB_NAME);

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  function loadUsers() {
    YellowBox.ignoreWarnings(['Encountered two']);
    if (loading) return;
    setLoading(true);
    db.transaction(tx => {
      tx.executeSql(
        'select * from users order by name LIMIT 20 OFFSET ?;',
        [page],
        (_, { rows: { _array } }) => setUsers([...users, ..._array])
      );
      setPage(page + 20);
    });
    setLoading(false);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const onRefreshHandler = () => {
    // reset pageNo to 1
    setRefreshing(true);
    setTimeout(() => {
      loadUsers();
      setRefreshing(false);
    }, 300);
  };

  function renderFooter() {
    if (loading) return null;
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  }

  function handleClickUser(user) {
    dispatch(
      UserActions.chooseUser({
        id: user._id,
        picture: user.picture,
        name: user.name,
        email: user.email,
        age: user.age,
        balance: user.balance,
        latitude: user.latitude,
        longitude: user.longitude,
      })
    );
    navigation.navigate('Details');
  }

  return (
    <View style={styles.container}>
      <FlatList
        onEndReached={loadUsers}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefreshHandler}
          />
        }
        ListFooterComponent={renderFooter}
        style={styles.listUsers}
        data={users}
        keyExtractor={user => user._id}
        renderItem={({ item }) => (
          <UserCard
            name={item.name}
            age={item.age}
            email={item.email}
            favorite={item.favorite}
            picture={item.picture}
            onPress={() => {
              handleClickUser(item);
            }}
          />
        )}
      />
    </View>
  );
}

Home.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
