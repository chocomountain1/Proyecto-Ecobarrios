import prisma from "../../lib/prisma.js";

const getProblemsByEcobarrio = async (req, res) => {
  try {
    
    const id = req.params.id;
    console.log("Fetching problems for Ecobarrio ID:", id);
    const problems = await prisma.Problema.findMany({
  where: {
      desafio: {
        ecobarrio:{
          id: Number(id)
        }
      }
    },
  select: {
    id: true,
    descripcion: true
  }
})
    
    res.json(problems);
    console.log("Problems fetched:", problems);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo problemas" });
  }
};

export default getProblemsByEcobarrio;