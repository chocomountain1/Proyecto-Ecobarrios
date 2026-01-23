import prisma from "../../lib/prisma.js";

const getSolutionsByEcobarrio = async (req, res) => {
  try {
    
    const id = req.params.id;
    const solutions = await prisma.Solucion.findMany({
  where: {
    problema: {
      desafio: {
        ecobarrio:{
          id: Number(id)
        }
      }
    }
  },
  select: {
    id: true,
    propuesta_solucion: true,
    nombre_proyecto: true
  }
})
    
    res.json(solutions);
    console.log("Solutions fetched:", solutions);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo soluciones" });
  }
};

export default getSolutionsByEcobarrio;