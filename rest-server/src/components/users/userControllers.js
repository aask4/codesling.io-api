import db from '../../config/database';
import {
  fetchAllUserQuery,
  fetchUserQuery,
  updateUser
} from './userQueries';
import {
  success,
  error
} from '../../lib/log';

export const fetchAllUserController = async (req, res) => {
  try {
    const data = await fetchAllUserQuery();
    success('fetchAllUserController - successfully fetched data ', data);
    return res.status(200).send(data);
  } catch (err) {
    error('fetchAllUserController - error= ', err);
  }
};

export const fetchUserController = async (req, res) => {
  try {
    const data = await fetchUserQuery(req.params);
    success('fetchUserController - successfully fetched data ', data);
    return res.status(200).send(data)
  } catch (err) {
    error('fetchUserController - error= ', err)
  }
}

export const updateUserController = async (req, res) => {
  try {
    const userInfo = await updateUser(req.body);
    return res.status(201).send(userInfo);
  } catch (err) {
    error('updateUserController - error= ', error);
  }
};
