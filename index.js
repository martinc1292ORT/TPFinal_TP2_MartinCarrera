import app from "./src/app.js";
import { SERVER_PORT } from "./config/config.js";

const port = SERVER_PORT;

app.listen(port, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${port}`);
});
