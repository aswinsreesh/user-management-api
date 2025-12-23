import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM("admin", "user"),
    defaultValue: "user"
  },
  status: {
    type: DataTypes.ENUM("active", "inactive"),
    defaultValue: "active"
  },
  mobile: DataTypes.STRING,
  address: DataTypes.TEXT,
  dob: DataTypes.DATE,
  gender: DataTypes.STRING,
  deletedAt: DataTypes.DATE
}, {
  tableName: "users",
  timestamps: true
});

export default User;
