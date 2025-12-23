import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js";
import taskCommentRoutes from "./routes/taskComment.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);
app.use("/tasks", taskCommentRoutes);

export default app;
