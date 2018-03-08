import { addOpenDuelQuery, fetchOpenDuelQuery, removeOpenDuelQuery } from "./openDuelsQuery";
import { success, error } from "../../lib/log";
import { addTestCaseController } from "../testCases/testCasesControllers";

export const addOpenDuelController = async (req, res) => {
  try {
    const data = await addOpenDuelQuery(req.body);
    success('addOpenDuelController - successfully added open duel ', data);
    return res.status(200).send(data);
  } catch (err) {
    error('addOpenDuelController - error=', err);
  }
}

export const fetchOpenDuelController = async (req, res) => {
  try {
    const data = await fetchOpenDuelQuery(req.query);
    success('fetchOpenDuelController - successfully fetched open duel ', data);
    return res.status(200).send(data);
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
