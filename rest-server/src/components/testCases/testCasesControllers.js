import {
  addTestCaseQuery,
  fetchTestCaseQuery
} from './testCasesQuery';
import {
  success,
  error
} from '../../lib/log';

export const addTestCaseController = async (req, res) => {
  try {
    const data = await addTestCaseQuery(req.body);
    success('addTestCaseController - successfully added test case ', data);
    return res.status(200).send(data);
  } catch (err) {
    error('addTestCaseController - error= ', err);
  }
};

export const fetchTestCaseController = async (req, res) => {
  try {
    const data = await fetchTestCaseQuery(req.query);
    success('fetchTestCaseController - successfully fetched test case ', data);
    return res.status(200).send(data);
  } catch (err) {
    error('fetchTestCaseController - error= ', err);
  }
};
