import prisma from "../../lib/prisma.js";

export const getAllEcobarrios = async (req,res) => {
  try {
    console.log("Consultando ecobarrios sin ningún filtro")
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

export const getEcobarrios = async (req, res) => {
  try {
    console.log("Consultando ecobarrios")
    const {
      action_lines,
      n_sol,
      consolidationStatus,
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
    
    if(consolidationStatus && consolidationStatus != ""){
      where.OR = consolidationStatus.map((p) =>({
        sendero_ecobarrio:{
          contains: p,
          mode: "insensitive",
        }
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

      let comparator; //funcion anonima que guarda lo que quiero hacer según el valor del input de n_sol

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

export const createEcobarriosyDesafios = async (req,res) => {
  try{
    const data = req.body;
    const nuevo_ecobarrio_desafio = await prisma.Ecobarrio.create({
      data:{
        nombre: data.nombre,
        comuna: data.comuna,
        lat: Number(data.lat),
        lon: Number(data.lon),
        maps: data.maps,
        nombre_contacto: data.contacto,
        telefono_contacto: data.telefono,
        correo_contacto: data.correo,
        linea_de_accion: data.linea_accion.join(", "),
        sendero_ecobarrio: data.estado,
        desafios:{
          create: data.desafios.map(d=> ({
            titulo: d.titulo,
            desc: d.desc,
            ubicacion: d.ubicacion,
          }))
        }
      }
    });
    console.log("Ecobarrio y desafío creado exitosamente");
    res.json(nuevo_ecobarrio_desafio);
      } catch (error) {
        console.log(error);

        res.status(500).json({
          ok: false,
          error: "No se pudo crear el ecobarrio y sus desafíos",
        });
      }
    };

export const deleteEcobarrio = async(req,res) => {
  try{
  console.log("Eliminando ecobarrio")
  const id = Number(req.params.id)
  await prisma.ecobarrio.delete({
      where: { id },
    });
  console.log("Ecobarrio eliminado correctamente")
  res.json({ message: "Ecobarrio eliminado correctamente" });
  } catch(error){
    res.status(500).json({ error: "Error al eliminar el ecobarrio" });
  }
}