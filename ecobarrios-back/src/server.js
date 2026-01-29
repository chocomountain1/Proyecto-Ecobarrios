import express  from "express";
import cors from "cors";
import { createEcobarriosyDesafios } from "./controllers/ecobarrioController.js";
import { getEcobarrios }  from "./controllers/ecobarrioController.js";
import getSolutionsByEcobarrio from "./controllers/solutionController.js";
import getProblemBySolution from "./controllers/problemController.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/ecobarrios", getEcobarrios); // ruta api ecobarrios + filtros
app.post("/api/ecobarrios/create", createEcobarriosyDesafios) //post de ecobarrios + desafios
app.get("/api/ecobarrios/:id/solutions", getSolutionsByEcobarrio); // ruta api soluciones por ecobarrio
app.get("/api/ecobarrios/:id/problem", getProblemBySolution); // ruta api problemas por ecobarrio

app.listen(3000, () => console.log("API funcionando en :3000"));
