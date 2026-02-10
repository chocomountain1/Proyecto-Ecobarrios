-- DropForeignKey
ALTER TABLE "Desafio" DROP CONSTRAINT "Desafio_ecobarrioId_fkey";

-- DropForeignKey
ALTER TABLE "Problema" DROP CONSTRAINT "Problema_desafioId_fkey";

-- DropForeignKey
ALTER TABLE "Solucion" DROP CONSTRAINT "Solucion_problemaId_fkey";

-- AddForeignKey
ALTER TABLE "Desafio" ADD CONSTRAINT "Desafio_ecobarrioId_fkey" FOREIGN KEY ("ecobarrioId") REFERENCES "Ecobarrio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Problema" ADD CONSTRAINT "Problema_desafioId_fkey" FOREIGN KEY ("desafioId") REFERENCES "Desafio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solucion" ADD CONSTRAINT "Solucion_problemaId_fkey" FOREIGN KEY ("problemaId") REFERENCES "Problema"("id") ON DELETE CASCADE ON UPDATE CASCADE;
