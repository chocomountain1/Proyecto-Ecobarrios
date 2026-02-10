/*
  Warnings:

  - You are about to drop the column `desafio_particular` on the `Desafio` table. All the data in the column will be lost.
  - You are about to drop the column `tema_interes` on the `Desafio` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Desafio" DROP COLUMN "desafio_particular",
DROP COLUMN "tema_interes",
ADD COLUMN     "afectados" TEXT,
ADD COLUMN     "desc" TEXT,
ADD COLUMN     "titulo" TEXT,
ADD COLUMN     "ubicacion" TEXT;
