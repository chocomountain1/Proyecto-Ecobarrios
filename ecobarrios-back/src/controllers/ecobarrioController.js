const prisma = require("../../lib/prisma");

const getEcobarrios = async (req, res) => {
  try {
    const ecobarrios = await prisma.ecobarrio.findMany({
      select: {
        nombre: true,
        comuna: true,
        lat: true,
        lon: true,
        nombre_contacto: true,
        telefono_contacto: true,
        correo_contacto: true,
        linea_de_accion: true,
        sendero_ecobarrio: true
      }
    });

    res.json(ecobarrios);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo ecobarrios" });
  }
};

module.exports = { getEcobarrios };