import { Sequelize } from "sequelize";
import {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DIALECT
} from "../../config/config.js";

const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  port: DB_PORT,
});

try {
  await connection.authenticate();
  console.log("🟢 BD conectada.");
} catch (error) {
  console.error("🔴 No se pudo conectar a la BD: ", error);
}

export default connection;
