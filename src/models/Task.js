import { DataTypes, Model } from "sequelize";
import connection from "../db/connection.js";

class Task extends Model {}

Task.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT, 
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("pendiente", "en_progreso", "hecho"),
      allowNull: false,
      defaultValue: "pendiente",
    },
    priority: {
      type: DataTypes.ENUM("baja", "media", "alta"),
      allowNull: false,
      defaultValue: "media",
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Task",
    timestamps: true,
  }
);

export default Task;
