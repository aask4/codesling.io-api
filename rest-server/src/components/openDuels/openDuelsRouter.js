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
  .delete(removeOpenDuelController)
  .put(updateOpenDuelController);

export default router;
