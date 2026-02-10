export async function seedSoluciones(prisma) {
  const problemas = await prisma.Problema.findMany({
    select: { id: true },
    where: { usuarios: 'Adultos jóvenes con hijos del barrio República'} //filtrar por mientras para hacer pruebas
  })

  await prisma.Solucion.createMany({
    data: problemas.map(p => ({
      propuesta_solucion: 'Por un lado se busca implementar un sistema de riego automatizado sostenible, el cual está regulado a través de horarios del día promoviendo la reducción del consumo de agua. También se tiene en cuenta el uso de vegetación que se utilizará, el cual se busca que sea resistente y de bajo mantenimiento, lo que conlleva a un espacio autónomo. Por otro lado, hay un enfoque en la creación de sombras y zonas de descanso, implementando bancas ergonómicas y pérgolas de madera, integrando mobiliario fabricado con madera reciclada',
      nombre_proyecto: 'Barrio REDpública',
      TRL:3,
      grado_innovacion:'Incremental',
      SRL:3,
      url:'https://drive.google.com/file/d/1KOEtVoTn2_V-4dNLE-JUeanPQabMp3Sf/view?usp=sharing',
      problemaId: p.id
    }))
  })
}