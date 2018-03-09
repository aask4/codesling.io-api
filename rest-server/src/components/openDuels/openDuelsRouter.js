import express from "express";

import {
  addOpenDuelController,
  fetchOpenDuelController,
  removeOpenDuelController,
  updateOpenDuelController
} from "./openDuelsControllers";

const router = express.Router();

router
  .route("/")
  .get(fetchOpenDuelController)
  .post(addOpenDuelController)
  .delete(removeOpenDuelController);

export default router;
