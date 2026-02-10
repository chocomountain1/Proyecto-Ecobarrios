import {z} from "zod";
const desafioSchema = z.object({
    titulo: z.string(),
    desc: z.string(),
    ubicacion: z.string()
})

export const ecobarrioSchema = z.object({
    nombre: z.string().min(5),
    comuna: z.string(),
    lat: z.string().min(2),
    lon: z.string().min(2),
    maps: z.string(),
    contacto: z.string(),
    telefono: z.string(),
    correo: z.string(),
    linea_accion: z.array(z.string()),
    estado: z.string(),
    desafios: z.array(desafioSchema).min(1)
})

export default ecobarrioSchema;