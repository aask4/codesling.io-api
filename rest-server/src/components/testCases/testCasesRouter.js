import express from "express";

import {
  addTestCaseController,
  fetchTestCaseController
} from "./testCasesControllers";

const router = express.Router();

router
  .route("/")
  .post(addTestCaseController);

router.route("/:challenge_id").get(fetchTestCaseController);

export default router;
