/*
  Warnings:

  - Added the required column `linea_de_accion` to the `Ecobarrio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sendero_ecobarrio` to the `Ecobarrio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ecobarrio" ADD COLUMN     "linea_de_accion" TEXT NOT NULL,
ADD COLUMN     "sendero_ecobarrio" TEXT NOT NULL;
