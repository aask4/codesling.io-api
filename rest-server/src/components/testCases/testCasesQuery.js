import db from '../../config/database';
import {
  addTestCaseHelper,
  getTestCaseHelper
} from './testCasesSQLHelpers';
import {
  success,
  error
} from '../../lib/log';

export const addTestCaseQuery = async (body) => {
  try {
    const queryString = addTestCaseHelper(body);
    const data = db.queryAsync(queryString);
    success('addTestCaseQuery - successfully added test case ', data);
    return data;
  } catch (err) {
    error('addTestCaseQuery - error= ', err);
  }
};

export const getTestCaseQuery = async (params) => {
  try {
    console.log(params);
    const queryString = getTestCaseHelper(params);
    const data = db.queryAsync(queryString);
    success('getTestCaseQuery - successfully getted test case ', data);
    return data;
  } catch (err) {
    error('getTestCaseQuery - error= ', err);
  }
};
