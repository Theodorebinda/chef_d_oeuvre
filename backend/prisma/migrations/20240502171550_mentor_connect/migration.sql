/*
  Warnings:

  - Added the required column `nom` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "nom" TEXT NOT NULL,
ALTER COLUMN "thematique" DROP NOT NULL,
ALTER COLUMN "cursus" DROP NOT NULL;
