const prisma = require("../db/prisma");
const bcrypt = require('bcryptjs');


const getUsers = async (req, res) => {
  try {
    const users = await prisma.users.findMany();
    res.json(users);
  } catch (err) {
    console.error('Error fetching items', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


const postUsers = async (req, res) => {
  try {
  const { nom, prenom,email,password,pays,ville,tel,age,thematique,cursus,nomDiplome,anneeDiplome,etablissementDobtention,filiere,secteurDactivite,intitulerDePoste,entreprise,objectifProfessionelle,competenceAdevelopper,interets,domaineDeMentorate,domaineDexpertise,url,Role,Reunion, } = req.body;

   // Hash the password
   const hashedPassword = await bcrypt.hash(password, 10);

   // Save the user to the database
    const newUser = await prisma.users.create({
      data: {
        nom,
        prenom,
        email,
        password: hashedPassword,
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
    res.status(201).json(newUser,{ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error creating item', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
  
  module.exports = {
    getUsers,
    postUsers
  };
  