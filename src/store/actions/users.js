/* eslint-disable no-underscore-dangle */
import { fetchUsers } from '../../scripts/Database';

// export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const FETCH_USERS = 'FETCH_USERS';

// export const toggleFavorite = (id) => ({
//   type: TOGGLE_FAVORITE,
//   userId: id,
// });

export const fetchUsersAction = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchUsers();
      console.log('dbResult', dbResult)
      dispatch({ type: FETCH_USERS, users: dbResult.rows._array });
    } catch (e) {
      console.log('fetchUsersAction ** Error', e);
    }
  };
};
