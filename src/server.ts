import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();
app.use(cors()); // habilitado para qualquer endereço conseguir acessar o back-end
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("HTTP server running!");
});
