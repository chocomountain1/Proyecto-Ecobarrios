import prisma from "../../lib/prisma.js";
const getEcobarrios = async (req, res) => {
  try {
  
    const {
      action_lines,
      n_sol,
    } = req.body;
   
    const where = {};

    if (action_lines && action_lines.length > 0) {
    where.AND = action_lines.map((p) => ({
      linea_de_accion: {
        contains: p,
        mode: "insensitive",
      },
    }));
  }
    
    const ecobarrios = await prisma.ecobarrio.findMany({
      where,
      select: {
        id: true,
        nombre: true,
        comuna: true,
        lat: true,
        lon: true,
        maps: true,
        nombre_contacto: true,
        telefono_contacto: true,
        correo_contacto: true,
        linea_de_accion: true,
        sendero_ecobarrio: true
      },
    });
    res.json(ecobarrios);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo ecobarrios" });
  }
};

export default getEcobarrios;