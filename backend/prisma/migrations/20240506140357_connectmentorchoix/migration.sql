-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "prenom" DROP NOT NULL,
ALTER COLUMN "nom" DROP NOT NULL,
ALTER COLUMN "pays" DROP NOT NULL,
ALTER COLUMN "ville" DROP NOT NULL,
ALTER COLUMN "tel" DROP NOT NULL,
ALTER COLUMN "age" DROP NOT NULL;