//Conexión prisma a la bd, es necesario para obtener el cliente de prisma en otros archivos
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default prisma;