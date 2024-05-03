const prisma = require("../db/prisma");

const getUsers = async (req, res) => {
  try {
    const sessions = await prisma.sessions.findMany();
    res.json(sessions);
  } catch (err) {
    console.error('Error fetching items', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


const postUsers = async (req, res) => {
  const { nom, prenom,email,password,pays,ville,tel,age,thematique,cursus,nomDiplome,anneeDiplome,etablissementDobtention,filiere,secteurDactivite,intitulerDePoste,entreprise,objectifProfessionelle,competenceAdevelopper,interets,domaineDeMentorate,domaineDexpertise,url,Role,Reunion, } = req.body;
  try {
    const newUser = await prisma.users.create({
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
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Error creating item', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
  
  module.exports = {
    getUsers,
    postUsers
  };
  