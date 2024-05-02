const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const Server = express();
const port = 3001;

Server.use(express.json());
Server.use(express.urlencoded({ extended: true }));

Server.get('/users', async (req, res) => {
  try {
    const items = await prisma.users.findMany();
    res.json(items);
  } catch (err) {
    console.error('Error fetching items', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
Server.get('/users', async (req, res) => {
  try {
    const items = await prisma.users.findMany();
    res.json(items);
  } catch (err) {
    console.error('Error fetching items', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

Server.post('/users', async (req, res) => {
  const { nom, prenom,email,password,pays,ville,tel,age,thematique,cursus,nomDiplome,anneeDiplome,etablissementDobtention,filiere,secteurDactivite,intitulerDePoste,entreprise,objectifProfessionelle,competenceAdevelopper,interets,domaineDeMentorate,domaineDexpertise,url,Role,Reunion, } = req.body;
  try {
    const newItem = await prisma.users.create({
      data: {
        nom,
        prenom,
        email,
        password,
        pays,
        ville,
        tel,
        age,
        thematique,
        cursus,
        nomDiplome,
        anneeDiplome,
        etablissementDobtention,
        filiere,
      },
    });
    res.status(201).json(newItem);
  } catch (err) {
    console.error('Error creating item', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Routes pour les opérations PUT et DELETE

Server.listen(port, () => {
  console.log(`Server est lancée au port:${port}`);
});
