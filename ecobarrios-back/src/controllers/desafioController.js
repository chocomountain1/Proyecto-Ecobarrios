import prisma from "../../lib/prisma.js";

const getDesafioByEcobarrio = async (req, res) => {
  try {
    console.log("Consultando desafíos según el ecobarrio")
    const ecobarrio_id = Number(req.params.id);
    console.log(ecobarrio_id)
    const desafios = await prisma.Desafio.findMany({
  where: {ecobarrioId : ecobarrio_id},
  select: {
    id:true,
    titulo:true
  }
  });
    res.json(desafios);
  } catch (error) {
  console.error(error);
  res.status(500).json({ error: error.message });
}
};

export default getDesafioByEcobarrio;