-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "pays" VARCHAR(150) NOT NULL,
    "ville" VARCHAR(100) NOT NULL,
    "tel" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,
    "avatar" BYTEA,
    "thematique" VARCHAR(150) NOT NULL,
    "cursus" VARCHAR(200) NOT NULL,
    "nomDiplome" VARCHAR(150),
    "anneeDiplome" INTEGER,
    "etablissementDobtention" VARCHAR(250),
    "filiere" VARCHAR(100),
    "secteurDactivite" VARCHAR(100),
    "intitulerDePoste" VARCHAR(100),
    "entreprise" VARCHAR(100),
    "objectifProfessionelle" VARCHAR(150),
    "competenceAdevelopper" VARCHAR(100),
    "interets" VARCHAR(100),
    "domaineDeMentorate" VARCHAR(100),
    "domaineDexpertise" VARCHAR(200),
    "url" VARCHAR(100),
    "reunionId" INTEGER,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "mentor" BOOLEAN NOT NULL DEFAULT false,
    "mentee" BOOLEAN NOT NULL DEFAULT false,
    "partenaire" BOOLEAN NOT NULL DEFAULT false,
    "usersId" INTEGER NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reunion" (
    "id" SERIAL NOT NULL,
    "sujet" VARCHAR(150) NOT NULL,
    "date" INTEGER NOT NULL,
    "duree" TEXT,
    "lieu" TEXT NOT NULL,
    "usersId" INTEGER NOT NULL,

    CONSTRAINT "Reunion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "content" VARCHAR(300) NOT NULL,
    "usersId" INTEGER,
    "reunionId" INTEGER,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sessions" (
    "id" SERIAL NOT NULL,
    "titre" VARCHAR(50) NOT NULL,
    "description" VARCHAR(150) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "duree" VARCHAR(30) NOT NULL,
    "contacts" VARCHAR(100) NOT NULL,
    "point" INTEGER NOT NULL,
    "ressources" VARCHAR(100) NOT NULL,
    "reunionId" INTEGER,

    CONSTRAINT "Sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appartenir" (
    "id" SERIAL NOT NULL,
    "reunionId" INTEGER,
    "sessionsId" INTEGER,

    CONSTRAINT "Appartenir_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Connecter" (
    "id" SERIAL NOT NULL,
    "sessionsId" INTEGER,
    "usersId" INTEGER,

    CONSTRAINT "Connecter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ReunionToUsers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ReunionToSessions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ReunionToUsers_AB_unique" ON "_ReunionToUsers"("A", "B");

-- CreateIndex
CREATE INDEX "_ReunionToUsers_B_index" ON "_ReunionToUsers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ReunionToSessions_AB_unique" ON "_ReunionToSessions"("A", "B");

-- CreateIndex
CREATE INDEX "_ReunionToSessions_B_index" ON "_ReunionToSessions"("B");

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_reunionId_fkey" FOREIGN KEY ("reunionId") REFERENCES "Reunion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appartenir" ADD CONSTRAINT "Appartenir_reunionId_fkey" FOREIGN KEY ("reunionId") REFERENCES "Reunion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appartenir" ADD CONSTRAINT "Appartenir_sessionsId_fkey" FOREIGN KEY ("sessionsId") REFERENCES "Sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connecter" ADD CONSTRAINT "Connecter_sessionsId_fkey" FOREIGN KEY ("sessionsId") REFERENCES "Sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connecter" ADD CONSTRAINT "Connecter_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReunionToUsers" ADD CONSTRAINT "_ReunionToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "Reunion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReunionToUsers" ADD CONSTRAINT "_ReunionToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReunionToSessions" ADD CONSTRAINT "_ReunionToSessions_A_fkey" FOREIGN KEY ("A") REFERENCES "Reunion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReunionToSessions" ADD CONSTRAINT "_ReunionToSessions_B_fkey" FOREIGN KEY ("B") REFERENCES "Sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
