import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient;
}

let prismaClient: PrismaClient;

// check to use this workaround only in development and not in production
if (process.env.NODE_ENV === "production") {
  prismaClient = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prismaClient = global.prisma;
}

export default prismaClient;
