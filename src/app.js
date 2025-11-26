import express from "express";
import router from "./routes/router.js";
import cookieParser from "cookie-parser";
import connection from "./db/connection.js";
import notFound from "./middlewares/notFound.js";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


await connection.sync({ force: false });
console.log("🚀 Modelos de la BD sincronizados");

app.use("/app", router);

app.use(notFound);

export default app;
