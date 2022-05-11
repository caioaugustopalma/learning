import { PrismaClient } from '@prisma/client';

let _prisma;

if (process.env.NODE_ENV === 'production') {
  _prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  _prisma = global.prisma;
}

export { _prisma };
