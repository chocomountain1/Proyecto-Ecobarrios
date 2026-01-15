//Conexión prisma a la bd, es necesario para obtener el cliente de prisma en otros archivos
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
module.exports = prisma;