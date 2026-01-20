import prisma from "../../lib/prisma.js";

const getSolutionsByEcobarrio = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const solutions = await prisma.Solucion.findMany({
        select: {
          propuesta_solucion: true,
          nombre_proyecto: true,
        },
        where: {
          problema: {           //puedo acceder directamente a las relaciones por prisma
            desafio: {
              ecobarrio: {
                id: id
              }
            }
          }
        }
      });

    res.json(solutions);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo soluciones" });
  }
};

export default getSolutionsByEcobarrio;