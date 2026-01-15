const express = require("express");
const cors = require("cors");
const { getEcobarrios } = require("./controllers/ecobarrioController");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json());

app.get("/api/ecobarrios", getEcobarrios); // ruta api ecobarrios

app.listen(3000, () => console.log("API funcionando en :3000"));
