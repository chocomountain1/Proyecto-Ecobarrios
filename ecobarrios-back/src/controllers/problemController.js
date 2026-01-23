import prisma from "../../lib/prisma.js";

const getProblemBySolution = async (req, res) => {
  try {
    
    const sol_id = Number(req.params.id);
    console.log("Fetching problem for solution ID:", sol_id);
    const problems = await prisma.Solucion.findUnique({
  where: {id : sol_id},
  select: {problema:{select:{descripcion:true}}
  }})
    
    res.json(problems.problema);
    console.log("Problem fetched:", problems);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo problemas" });
  }
};

export default getProblemBySolution;