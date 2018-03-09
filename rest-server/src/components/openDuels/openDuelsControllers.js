import {
  addOpenDuelQuery,
  fetchOpenDuelQuery,
  removeOpenDuelQuery,
  updateOpenDuelQuery
 } from "./openDuelsQuery";
import { success, error } from "../../lib/log";
import { addTestCaseController } from "../testCases/testCasesControllers";

export const addOpenDuelController = async (req, res) => {
  try {
    const {rows} = await addOpenDuelQuery(req.body);
    success('addOpenDuelController - successfully added open duel ', rows[0]);
    return res.status(200).send(rows[0]);
  } catch (err) {
    error('addOpenDuelController - error=', err);
  }
}

export const fetchOpenDuelController = async (req, res) => {
  try {
    const {rows} = await fetchOpenDuelQuery(req.query);
    success('fetchOpenDuelController - successfully fetched open duel ', rows);
    return res.status(200).send(rows);
  } catch (err) {
    error("fetchOpenDuelController - error=", err);
  }
}

export const removeOpenDuelController = async (req, res) => {
  try {
    const data = await removeOpenDuelQuery(req.body);
    success('removeOpenDuelController - successfully removed open duel ', data);
    return res.status(200).send(data);
  } catch (err) {
    error("removeOpenDuelController - error=", err);
  }
}

export const updateOpenDuelController = async (req, res) => {
  try {
    const {rows} = await updateOpenDuelQuery(req.query);
    console.log("UPDATE OPEN DUEL CONTROLLER _______ ", rows);
    success("updateOpenDuelController - successfully updated open duel ", rows);
    return res.status(200).send(rows[0]);
  } catch (err) {
    error("updateOpenDuelController - error=", err);
  }
}
