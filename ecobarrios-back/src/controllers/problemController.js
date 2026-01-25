import prisma from "../../lib/prisma.js";

const getProblemBySolution = async (req, res) => {
  try {
    
    const sol_id = Number(req.params.id);
    
    const problems = await prisma.Solucion.findUnique({
  where: {id : sol_id},
  select: {problema:{select:{descripcion:true}}
  }})
    
    res.json(problems.problema);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo problemas" });
  }
};

export default getProblemBySolution;