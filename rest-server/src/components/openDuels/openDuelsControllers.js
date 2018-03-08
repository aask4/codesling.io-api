import { addOpenDuelQuery, fetchOpenDuelQuery, removeOpenDuelQuery } from "./openDuelsQuery";
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
    console.log('fetchOpenDuelController >>>> ', rows)
    success('fetchOpenDuelController - successfully fetched open duel ', rows);
    return res.status(200).send(rows);
  } catch (err) {
    error("fetchOpenDuelController - error=", err);
  }
}

export const removeOpenDuelController = async (req, res) => {
  try {
    const data = await removeOpenDuelQuery(req.query);
    success('removeOpenDuelController - successfully removed open duel ', data);
    return res.status(200).send(data);
  } catch (err) {
    error("removeOpenDuelController - error=", err);
  }
}
