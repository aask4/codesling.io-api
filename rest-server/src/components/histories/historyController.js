import {
  historyQuery,
  historyQueryHelper
} from './historyQueries';
import {
  success,
  error
} from '../../lib/log';

export const historyController = async (req, res) => {
  const { url, method } = req;
  let payload;
  if (method === 'POST' || method === 'PUT') {
    payload = req.body;
  } else {
    payload = req.params;
  }
  try {
    const data = await historyQuery(payload, url);
    success('historyController - successfully retrieved data ', data)
    return res.status(200).send();
  } catch (err) {
    error('historyController - error= ', err);
    res.status(404).send(err)
  }
};

import { fetchUserQuery } from '../users/userQueries';

export const fetchHistoryController = async (req, res) => {
  try {
    const { rows } = await historyQueryHelper(req.params);
    for (let row of rows) {
      let user = await fetchUserQuery({user_id: row.challenger_id});
      row.receiver = user.rows[0];
    }
    return res.status(200).send(rows);
  } catch (err) {
    error('error fetching messages ', err);
    res.status(404).send(err)
  }
};
