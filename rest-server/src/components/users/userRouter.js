import express from 'express';

import {
  fetchAllUserController,
  fetchUserController,
  updateUserController
} from './userControllers';

const router = express.Router();

router.route('/fetchAllUsers')
  .get(fetchAllUserController);

router.route('/fetchUserInfo/:user_id')
  .get(fetchUserController);

router.route('/updateUserScore')
  .post(updateUserController);

export default router;
