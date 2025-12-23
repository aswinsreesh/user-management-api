import app from "./app.js";
import sequelize from "./config/db.js";

const PORT = process.env.PORT || 3000;

import Task from "./models/task.model.js";
import TaskComment from "./models/taskComment.model.js";
import User from "./models/user.model.js";

Task.belongsTo(User, { foreignKey: "assigned_to", as: "assignee" });
Task.belongsTo(User, { foreignKey: "created_by", as: "creator" });

TaskComment.belongsTo(Task, { foreignKey: "task_id" });
TaskComment.belongsTo(User, { foreignKey: "user_id" });

(async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected");

    await sequelize.sync({ alter: true });
    console.log("Database synced");

    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  } catch (error) {
    console.error("DB connection error:", error);
  }
})();
