/*
  Warnings:

  - You are about to alter the column `age` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `VarChar(2)`.
  - You are about to alter the column `anneeDiplome` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `VarChar(4)`.

*/
-- AlterTable
ALTER TABLE "Sessions" ALTER COLUMN "contacts" DROP NOT NULL,
ALTER COLUMN "point" DROP NOT NULL,
ALTER COLUMN "point" SET DATA TYPE TEXT,
ALTER COLUMN "ressources" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "age" SET DATA TYPE VARCHAR(2),
ALTER COLUMN "anneeDiplome" SET DATA TYPE VARCHAR(4);
