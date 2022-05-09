-- CreateTable
CREATE TABLE "People" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "cpfcnpj" TEXT,
    "rg" TEXT,

    CONSTRAINT "People_pkey" PRIMARY KEY ("id")
);
