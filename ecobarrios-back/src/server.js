import express  from "express";
import cors from "cors";
import getEcobarrios  from "./controllers/ecobarrioController.js";
import getSolutionsByEcobarrio from "./controllers/solutionController.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/ecobarrios", getEcobarrios); // ruta api ecobarrios
app.get("/api/ecobarrios/:id/solutions", getSolutionsByEcobarrio); // ruta api soluciones por ecobarrio

app.listen(3000, () => console.log("API funcionando en :3000"));
