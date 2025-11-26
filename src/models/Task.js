import { DataTypes, Model } from "sequelize";
import connection from "../db/connection.js";

class Task extends Model {}

Task.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [0, 1000]
      },
    },
    status: {
      type: DataTypes.ENUM("PENDIENTE", "EN_PROGRESO", "HECHO"),
      allowNull: false,
      defaultValue: "PENDIENTE",
    },
    priority: {
      type: DataTypes.ENUM("BAJA", "MEDIA", "ALTA"),
      allowNull: false,
      defaultValue: "MEDIA",
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
