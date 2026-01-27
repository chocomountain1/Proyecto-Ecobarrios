import prisma from "../../lib/prisma.js";
function drivePreviewUrl(url) {
  if (!url) return null;

  let id = null;

  // formato /d/ID/
  const match1 = url.match(/\/d\/(.*?)\//);
  if (match1) id = match1[1];

  // formato ?id=ID
  const match2 = url.match(/[?&]id=([^&]+)/);
  if (match2) id = match2[1];

  if (!id) return url;

  return `https://drive.google.com/file/d/${id}/preview`;
}

const getSolutionsByEcobarrio = async (req, res) => {
  try {
    
    const id = req.params.id;
    const solution = await prisma.Solucion.findMany({
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
    SRL:true,
    url:true
  }
})
  if(solution.url){
  const formatted_data = solution.map(s=>({
    ...s,
    url: drivePreviewUrl(s.url)
    }));
    console.log(formatted_data[0].url)
    res.json(formatted_data);
  }
  else res.json(solution);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo soluciones" });
  }
};

export default getSolutionsByEcobarrio;