import prisma from "../../lib/prisma.js";

const getSolutionsBySolution = async (req, res) => {
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
    nombre_proyecto: true,
    TRL:true,
    grado_innovacion:true,
    SRL:true
  }
})
    
    res.json(solutions);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo soluciones" });
  }
};

export default getSolutionsBySolution;