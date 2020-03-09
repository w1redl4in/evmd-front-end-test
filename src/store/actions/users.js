/* eslint-disable no-underscore-dangle */
import { fetchUsersFromDB } from '../../scripts/Database';

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsersAction = () => async (dispatch) => {
  try {
    const dbResult = await fetchUsersFromDB();
    dispatch({ type: FETCH_USERS, users: dbResult.rows._array });
    console.log('******dbResult******', dbResult);
  } catch (e) {
    console.log('Error => fetchUsersAction => ', e);
  }
};
