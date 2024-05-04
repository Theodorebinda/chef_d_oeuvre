const prisma = require("../db/prisma");

const getUsers = async (req, res) => {
  try {
    const sessions = await prisma.users.findMany();
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

async function checkUserRoles(userId) {
  try {
    const user = await prisma.users.findUnique({
      where: { id: userId },
      include: { Role: true }
    });

    if (!user) {
      console.log("Utilisateur introuvable.");
      return;
    }

    // Vérifie si l'utilisateur est un mentor
    if (user && user.Role.map(role => role.nom === 'mentor')) {
      console.log("Cet utilisateur est un mentor.");
    } else {
      console.log("Cet utilisateur n'est pas un mentor.");
    }

    // Vérifier si l'utilisateur est un mentoré
    if (user && user.Role.some(role => role.nom === "mentee")) {
      console.log("Cet utilisateur est un mentoré.");
    } else {
      console.log("Cet utilisateur n'est pas un mentoré.");
    }

    // Vérifier si l'utilisateur est un partenaire
    if (user.Role && user.Role.partenaire) {
      console.log("Cet utilisateur est un partenaire.");
    } else {
      console.log("Cet utilisateur n'est pas un partenaire.");
    }

  } catch (error) {
    console.error("Une erreur s'est produite :", error);
  } finally {
    await prisma.$disconnect(); // Déconnexion de Prisma Client
  }
}

// Utilisation de la fonction pour vérifier les rôles d'un utilisateur avec son ID
const userId = 1 // Remplacez 1 par l'ID de l'utilisateur que vous souhaitez vérifier
checkUserRoles(userId);

  
  module.exports = {
    getUsers,
    postUsers
  };
  