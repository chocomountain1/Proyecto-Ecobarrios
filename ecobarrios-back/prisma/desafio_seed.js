export async function seedDesafios(prisma) {
  const ecobarrios = await prisma.Ecobarrio.findMany({
    select: { id: true },
    where: { nombre: "República Circular"} //filtrar por mientras para hacer pruebas
  })

  await prisma.Desafio.createMany({
    data: ecobarrios.map(e => ({
      titulo: "titulo genérico",
      ecobarrioId: e.id 
    }))
  })
}
