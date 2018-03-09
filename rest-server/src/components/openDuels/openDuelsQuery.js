import db from "../../config/database";
import {
  addOpenDuelHelper,
  fetchOpenDuelHelper,
  removeOpenDuelHelper,
  updateOpenDuelHelper
} from "./openDuelsSQLHelpers";
import { success, error } from "../../lib/log";

export const addOpenDuelQuery = async (body) => {
  try{
    const queryString = addOpenDuelHelper(body);
    const data = db.queryAsync(queryString);
    success('addOpenDuelQuery - successfully added open duel ', data);
    return data;
  } catch (err) {
    error('addOpenDuelQuery - error=', err);
  }
};

export const fetchOpenDuelQuery = async (body) => {
  try {
    const queryString = fetchOpenDuelHelper(body);
    const data = db.queryAsync(queryString);
    success("fetchOpenDuelQuery - successfully fetched open duel ", data);
    return data;
  } catch (err) {
    error("fetchOpenDuelQuery - error=", err);
  }
};

export const removeOpenDuelQuery = async (body) => {
  try {
    const queryString = removeOpenDuelHelper(body);
    const data = db.queryAsync(queryString);
    success("removeOpenDuelQuery - successfully removed open duel ", data);
    return data;
  } catch (err) {
    error("removeOpenDuelQuery - error=", err);
  }
};

export const updateOpenDuelQuery = async (body) => {
  try {
    const queryString = updateOpenDuelHelper(body);
    const data = db.queryAsync(queryString);
    success("updateOpenDuelQuery - successfully updated open duel ", data);
    return data;
  } catch (err) {
    error("updateOpenDuelQuery - error=", err);
  }
}
