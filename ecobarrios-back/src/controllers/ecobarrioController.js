import prisma from "../../lib/prisma.js";

const getEcobarrios = async (req, res) => {
  try {
    const ecobarrios = await prisma.ecobarrio.findMany({
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