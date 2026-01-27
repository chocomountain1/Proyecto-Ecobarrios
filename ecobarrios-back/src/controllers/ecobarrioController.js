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
    
    if(n_sol > -1){
      const ecobarrios = await prisma.ecobarrio.findMany({
        where,
        include: {
          desafios: {
            include: {
              problemas: {
                include: {
                  _count: {
                    select: { soluciones: true }
                  }
                }
              }
            }
          }
        }
      });
      let comparator;

      if(n_sol > 5){
        comparator = (a,b) => a >= b;
      }
      else{
        comparator = (a,b) => a == b
      }
      const filtrados = ecobarrios.filter(e =>
       comparator(e.desafios.reduce((accD, d) =>
        accD + d.problemas.reduce((accP, p) =>
          accP + p._count.soluciones, 0
        ), 0
      ),n_sol)
    );
      return res.json(filtrados);
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