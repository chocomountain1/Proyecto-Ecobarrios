import express  from "express";
import cors from "cors";
import { createEcobarriosyDesafios, getAllEcobarrios } from "./controllers/ecobarrioController.js";
import { getEcobarrios }  from "./controllers/ecobarrioController.js";
import getSolutionsByEcobarrio from "./controllers/solutionController.js";
import {getProblemBySolution} from "./controllers/problemController.js";
import getDesafioByEcobarrio from "./controllers/desafioController.js";
import { createProblema } from "./controllers/problemController.js";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/ecobarrios/sinFiltros", getAllEcobarrios); //get de ecobarrios
app.post("/api/ecobarrios", getEcobarrios); // ruta api ecobarrios + filtros
app.post("/api/ecobarrios/create", createEcobarriosyDesafios); //post de ecobarrios + desafios
app.post("/api/ecobarrios/problemas/create", createProblema); //post de problema + solucion
app.get("/api/ecobarrios/:id/desafios", getDesafioByEcobarrio);
app.get("/api/ecobarrios/:id/solutions", getSolutionsByEcobarrio); // ruta api soluciones por ecobarrio
app.get("/api/ecobarrios/:id/problem", getProblemBySolution); // ruta api problemas por ecobarrio

app.listen(3000, () => console.log("API funcionando en :3000"));
