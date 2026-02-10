/*
  Warnings:

  - You are about to drop the column `descripcion` on the `Ecobarrio` table. All the data in the column will be lost.
  - You are about to drop the column `año` on the `Seccion` table. All the data in the column will be lost.
  - The primary key for the `_DesafioToODS` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_ODSToProblema` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_ODSToSeccion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_Ruta_tematicaToSeccion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[A,B]` on the table `_DesafioToODS` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[A,B]` on the table `_ODSToProblema` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[A,B]` on the table `_ODSToSeccion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[A,B]` on the table `_Ruta_tematicaToSeccion` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `anio` to the `Seccion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ecobarrio" DROP COLUMN "descripcion";

-- AlterTable
ALTER TABLE "Seccion" DROP COLUMN "año",
ADD COLUMN     "anio" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "_DesafioToODS" DROP CONSTRAINT "_DesafioToODS_AB_pkey";

-- AlterTable
ALTER TABLE "_ODSToProblema" DROP CONSTRAINT "_ODSToProblema_AB_pkey";

-- AlterTable
ALTER TABLE "_ODSToSeccion" DROP CONSTRAINT "_ODSToSeccion_AB_pkey";

-- AlterTable
ALTER TABLE "_Ruta_tematicaToSeccion" DROP CONSTRAINT "_Ruta_tematicaToSeccion_AB_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "_DesafioToODS_AB_unique" ON "_DesafioToODS"("A", "B");

-- CreateIndex
CREATE UNIQUE INDEX "_ODSToProblema_AB_unique" ON "_ODSToProblema"("A", "B");

-- CreateIndex
CREATE UNIQUE INDEX "_ODSToSeccion_AB_unique" ON "_ODSToSeccion"("A", "B");

-- CreateIndex
CREATE UNIQUE INDEX "_Ruta_tematicaToSeccion_AB_unique" ON "_Ruta_tematicaToSeccion"("A", "B");
