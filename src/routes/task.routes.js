import express from "express";
import {
  createTask,
  updateTask,
  listTasks
} from "../controllers/task.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, createTask);
router.put("/:id", authenticate, updateTask);
router.get("/", authenticate, listTasks);

export default router;
