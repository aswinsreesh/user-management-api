import express from "express";
import {
  addComment,
  listComments
} from "../controllers/taskComment.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/:id/comments", authenticate, addComment);
router.get("/:id/comments", authenticate, listComments);

export default router;
