/*
  Warnings:

  - You are about to drop the column `mentee` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `mentor` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `partenaire` on the `Role` table. All the data in the column will be lost.
  - Added the required column `nom` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Role" DROP COLUMN "mentee",
DROP COLUMN "mentor",
DROP COLUMN "partenaire",
ADD COLUMN     "nom" VARCHAR(20) NOT NULL;
