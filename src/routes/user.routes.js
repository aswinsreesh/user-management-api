import express from "express";
import {
  me,
  listUsers,
  updateStatus,
  deleteUser
} from "../controllers/user.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/admin.middleware.js";

const router = express.Router();

router.get("/me", authenticate, me);
router.get("/", authenticate, adminOnly, listUsers);
router.put("/:id", authenticate, adminOnly, updateStatus);
router.delete("/:id", authenticate, adminOnly, deleteUser);

export default router;
