import express from 'express';

import {
  addTestCaseController,
  getTestCaseController
} from './testCasesControllers';

const router = express.Router();

router.route('/')
  .get(getTestCaseController)
  .post(addTestCaseController);

export default router;
