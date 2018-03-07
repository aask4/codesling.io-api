import db from '../../config/database';
import {
  addTestCaseHelper,
  fetchTestCaseHelper
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

export const fetchTestCaseQuery = async (body) => {
  try {
    const queryString = fetchTestCaseHelper(body);
    const data = db.queryAsync(queryString);
    success('fetchTestCaseQuery - successfully fetched test case ', data);
    return data;
  } catch (err) {
    error('fetchTestCaseQuery - error= ', err);
  }
};
