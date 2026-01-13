-- CreateTable
CREATE TABLE "Ecobarrio" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "comuna" TEXT NOT NULL,
    "descripcion" TEXT,
    "nombre_contacto" TEXT,
    "telefono_contacto" TEXT,
    "lat" DOUBLE PRECISION NOT NULL,
    "lon" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Ecobarrio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Desafio" (
    "id" SERIAL NOT NULL,
    "desafio_particular" TEXT,
    "tema_interes" TEXT,
    "ecobarrioId" INTEGER NOT NULL,

    CONSTRAINT "Desafio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Problema" (
    "id" SERIAL NOT NULL,
    "usuarios" TEXT,
    "clientes" TEXT,
    "descripcion" TEXT,
    "desafioId" INTEGER NOT NULL,

    CONSTRAINT "Problema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Solucion" (
    "id" SERIAL NOT NULL,
    "propuesta_solucion" TEXT,
    "nombre_proyecto" TEXT,
    "TRL" INTEGER,
    "grado_innovacion" TEXT,
    "SRL" INTEGER,
    "problemaId" INTEGER NOT NULL,

    CONSTRAINT "Solucion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ODS" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "ODS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sustentabilidad" (
    "solucionId" INTEGER NOT NULL,
    "odsId" INTEGER NOT NULL,
    "impacto" TEXT,
    "intensidad" INTEGER,
    "alcance" TEXT,
    "profundidad" TEXT,
    "riesgo" TEXT,

    CONSTRAINT "Sustentabilidad_pkey" PRIMARY KEY ("solucionId","odsId")
);

-- CreateTable
CREATE TABLE "Equipo_desarrollador" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER,
    "nombre" TEXT,
    "problemaId" INTEGER NOT NULL,
    "seccionId" INTEGER NOT NULL,

    CONSTRAINT "Equipo_desarrollador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estudiante" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "equipo_desarrolladorId" INTEGER NOT NULL,

    CONSTRAINT "Estudiante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seccion" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL,
    "titulo" TEXT,
    "desafio_principal" TEXT,
    "profesor_a_cargo" TEXT NOT NULL,
    "año" INTEGER NOT NULL,
    "cursoId" INTEGER NOT NULL,

    CONSTRAINT "Seccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ruta_tematica" (
    "id" SERIAL NOT NULL,
    "ruta_tematica" TEXT NOT NULL,
    "departamentos" TEXT,
    "centros" TEXT,
    "cursos_relacionados" TEXT,

    CONSTRAINT "Ruta_tematica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Curso" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "impartido_en" TEXT,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DesafioToODS" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_DesafioToODS_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ODSToProblema" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ODSToProblema_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ODSToSeccion" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ODSToSeccion_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_Ruta_tematicaToSeccion" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_Ruta_tematicaToSeccion_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Solucion_problemaId_key" ON "Solucion"("problemaId");

-- CreateIndex
CREATE UNIQUE INDEX "Equipo_desarrollador_problemaId_key" ON "Equipo_desarrollador"("problemaId");

-- CreateIndex
CREATE UNIQUE INDEX "Equipo_desarrollador_seccionId_key" ON "Equipo_desarrollador"("seccionId");

-- CreateIndex
CREATE INDEX "_DesafioToODS_B_index" ON "_DesafioToODS"("B");

-- CreateIndex
CREATE INDEX "_ODSToProblema_B_index" ON "_ODSToProblema"("B");

-- CreateIndex
CREATE INDEX "_ODSToSeccion_B_index" ON "_ODSToSeccion"("B");

-- CreateIndex
CREATE INDEX "_Ruta_tematicaToSeccion_B_index" ON "_Ruta_tematicaToSeccion"("B");

-- AddForeignKey
ALTER TABLE "Desafio" ADD CONSTRAINT "Desafio_ecobarrioId_fkey" FOREIGN KEY ("ecobarrioId") REFERENCES "Ecobarrio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Problema" ADD CONSTRAINT "Problema_desafioId_fkey" FOREIGN KEY ("desafioId") REFERENCES "Desafio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solucion" ADD CONSTRAINT "Solucion_problemaId_fkey" FOREIGN KEY ("problemaId") REFERENCES "Problema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sustentabilidad" ADD CONSTRAINT "Sustentabilidad_solucionId_fkey" FOREIGN KEY ("solucionId") REFERENCES "Solucion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sustentabilidad" ADD CONSTRAINT "Sustentabilidad_odsId_fkey" FOREIGN KEY ("odsId") REFERENCES "ODS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipo_desarrollador" ADD CONSTRAINT "Equipo_desarrollador_problemaId_fkey" FOREIGN KEY ("problemaId") REFERENCES "Problema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipo_desarrollador" ADD CONSTRAINT "Equipo_desarrollador_seccionId_fkey" FOREIGN KEY ("seccionId") REFERENCES "Seccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudiante" ADD CONSTRAINT "Estudiante_equipo_desarrolladorId_fkey" FOREIGN KEY ("equipo_desarrolladorId") REFERENCES "Equipo_desarrollador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seccion" ADD CONSTRAINT "Seccion_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DesafioToODS" ADD CONSTRAINT "_DesafioToODS_A_fkey" FOREIGN KEY ("A") REFERENCES "Desafio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DesafioToODS" ADD CONSTRAINT "_DesafioToODS_B_fkey" FOREIGN KEY ("B") REFERENCES "ODS"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ODSToProblema" ADD CONSTRAINT "_ODSToProblema_A_fkey" FOREIGN KEY ("A") REFERENCES "ODS"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ODSToProblema" ADD CONSTRAINT "_ODSToProblema_B_fkey" FOREIGN KEY ("B") REFERENCES "Problema"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ODSToSeccion" ADD CONSTRAINT "_ODSToSeccion_A_fkey" FOREIGN KEY ("A") REFERENCES "ODS"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ODSToSeccion" ADD CONSTRAINT "_ODSToSeccion_B_fkey" FOREIGN KEY ("B") REFERENCES "Seccion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Ruta_tematicaToSeccion" ADD CONSTRAINT "_Ruta_tematicaToSeccion_A_fkey" FOREIGN KEY ("A") REFERENCES "Ruta_tematica"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Ruta_tematicaToSeccion" ADD CONSTRAINT "_Ruta_tematicaToSeccion_B_fkey" FOREIGN KEY ("B") REFERENCES "Seccion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
