import fs from 'fs'
import Papa from 'papaparse'

export async function seedEcobarrios(prisma) {
  const file = fs.readFileSync(new URL('./data.csv', import.meta.url), 'utf8')

  const { data } = Papa.parse(file, {
    header: true,
    skipEmptyLines: true
  })

  await prisma.Ecobarrio.createMany({
    data: data.map(e => ({
      nombre: e.nombre,
      comuna: e.comuna,
      lat: parseFloat(e.lat),
      lon: parseFloat(e.lon),
      maps: e.maps,
      nombre_contacto: e.nombre_contacto,
      telefono_contacto: e.telefono_contacto,
      correo_contacto: e.correo_contacto,
      linea_de_accion: e.linea_de_accion,
      sendero_ecobarrio: e.sendero_ecobarrio
    })),
    skipDuplicates: true
  })

  console.log("Seed ecobarrios listo 🚀")
}

