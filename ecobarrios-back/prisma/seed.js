import { PrismaClient } from '@prisma/client'
import { seedEcobarrios } from './ecobarrio_seed.js'
import { seedDesafios } from './desafio_seed.js'
import { seedProblemas } from './problema_seed.js'
import { seedSoluciones } from './solucion_seed.js'

const prisma = new PrismaClient()

async function main() {
  await prisma.Solucion.deleteMany()
  await prisma.Problema.deleteMany()
  await prisma.Desafio.deleteMany()
  await prisma.Ecobarrio.deleteMany()

  
  await seedEcobarrios(prisma)
  await seedDesafios(prisma)
  await seedProblemas(prisma)
  await seedSoluciones(prisma)

  console.log('Seeds ejecutados correctamente 🚀')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
