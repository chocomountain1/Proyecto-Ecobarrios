export async function seedProblemas(prisma) {
  const desafios = await prisma.Desafio.findMany({
    select: { id: true },
    where: { titulo: "titulo genérico"} //filtrar por mientras para hacer pruebas
  })

  await prisma.Problema.createMany({
    data: desafios.map(d => ({
      usuarios: 'Adultos jóvenes con hijos del barrio República',
      clientes: '',
      descripcion:'Barrio República enfrenta una notoria falta de áreas verdes y espacios comunitarios activos. Muchos terrenos se encuentran abandonados, lo que limita las oportunidades de encuentro y recreación para los vecinos.',
      desafioId: d.id
    }))
  })
}
