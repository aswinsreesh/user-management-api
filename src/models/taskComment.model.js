import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const TaskComment = sequelize.define("TaskComment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  task_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: "task_comments",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: false
});

export default TaskComment;
