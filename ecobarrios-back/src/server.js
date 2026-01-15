import express from "express";
import { getEcobarrios } from "./controllers/ecobarrioController.js";

const app = express();
app.use(express.json());

app.get("/api/ecobarrios", getEcobarrios); // ruta api ecobarrios

app.listen(3000, () => console.log("API funcionando en :3000"));
