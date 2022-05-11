/*
  Warnings:

  - You are about to drop the `People` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "People";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "avatar" TEXT,
    "email" TEXT,
    "username" TEXT,
    "password" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
