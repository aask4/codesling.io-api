import express from 'express';

import {
  addTestCaseController,
  fetchTestCaseController
} from './testCasesControllers';

const router = express.Router();

router.route('/')
  .get(fetchTestCaseController)
  .post(addTestCaseController);

export default router;
