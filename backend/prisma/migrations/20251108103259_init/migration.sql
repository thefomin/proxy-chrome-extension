/*
  Warnings:

  - You are about to drop the column `ownerId` on the `proxies` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "proxies" DROP CONSTRAINT "proxies_ownerId_fkey";

-- AlterTable
ALTER TABLE "proxies" DROP COLUMN "ownerId";
