import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  status: {
    type: DataTypes.ENUM("pending", "in_progress", "completed"),
    defaultValue: "pending"
  },
  assigned_to: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  completed_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: "tasks",
  timestamps: true
});

export default Task;
