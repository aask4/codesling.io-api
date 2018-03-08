import db from '../../config/database';
import {
  fetchAllUserHelper,
  fetchUserHelper,
  updateUserHelper
} from './userSQLHelpers';
import {
  success,
  error
} from '../../lib/log';

export const fetchAllUserQuery = async () => {
  try {
    const queryString = fetchAllUserHelper();
    const data = await db.queryAsync(queryString);
    success('fetchAllUserQuery - successfully fetched all users ', data);
    return data;
  } catch (err) {
    error('fetchAllUserQuery - error= ', err);
    throw new Error(err);
  }
};

export const fetchUserQuery = async ({user_id}) => {
  try {
    const queryString = fetchUserHelper(user_id);
    const data = db.queryAsync(queryString);
    success('fetchUserQuery - successfully fetched user ', data);
    return data;
  } catch (err) {
    error('fetchUserQuery - error= ', err);
  }
}

export const updateUser = async ({user_id, clout, kdr_change}) => {
  try {
    const updateString = updateUserHelper(user_id, clout, kdr_change);
    const data = await db.queryAsync(updateString);
    success('updateUser - successfully updated user data ', data);
    return data;
  } catch (err) {
    error('updateUser - error= ', err)
  }
}