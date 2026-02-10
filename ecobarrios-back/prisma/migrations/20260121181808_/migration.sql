/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `Ecobarrio` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Ecobarrio_nombre_key" ON "Ecobarrio"("nombre");
