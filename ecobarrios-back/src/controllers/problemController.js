import prisma from "../../lib/prisma.js";

export const getProblemBySolution = async (req, res) => {
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

export const createProblema = async (req,res) => {
  try{
    console.log("Ingresando problema y solución...")
    const data = req.body;
    const nuevo_problema_solucion = await prisma.Problema.create({
      data:{
        usuarios: data.usuarios,
        clientes: data.clientes,
        descripcion: data.descripcion,
        desafioId : Number(data.desafioId),
        soluciones:{
          create: [{
            propuesta_solucion: data.soluciones.propuesta_solucion,
            nombre_proyecto: data.soluciones.nombre_proyecto,
            TRL: Number(data.soluciones.TRL),
            grado_innovacion: data.soluciones.grado_innovacion,
            SRL: Number(data.soluciones.SRL),
            url: data.soluciones.url
          }]
        }
      }
    });
    console.log("Problema y solucion creado exitosamente");
    res.json(nuevo_problema_solucion);
  } catch(error) {
    console.log(error)
    res.status(500).json({error: "Error creando ecobarrios y sus desafíos"});
  }

}

