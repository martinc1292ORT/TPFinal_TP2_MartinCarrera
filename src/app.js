import express from "express";
import router from "./routes/router.js";
import cookieParser from "cookie-parser";
import connection from "./db/connection.js";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// sincroniza modelos con la DB
await connection.sync({ force: false });
console.log("🟢 DB Connected and models synced.");

//rutas principales
app.use("/app", router);

// manejo de ruta inexistente
app.use((req, res) => {
  res.status(404).send({ success: false, message: "Endpoint not found" });
});

export default app;
