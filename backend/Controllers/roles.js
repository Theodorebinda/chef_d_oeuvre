const prisma = require("../db/prisma");

const getRoles = async (req, res) => {
    try {
      const roles = await prisma.role.findMany();
      res.json(roles);
    } catch (err) {
      console.error('Error fetching items', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  
  async function getUserWithRoles(userId) {
    try {
      const utilisateurAvecRoles = await prisma.users.findUnique({
        where: { id: userId },
        include: { Role: true },
      });
      return utilisateurAvecRoles;
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'utilisateur avec ses rôles :', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
  
  // Utilisation de la fonction pour récupérer l'utilisateur avec ses rôles
  const userId = 1; // Remplacez 1 par l'ID de l'utilisateur que vous souhaitez récupérer
  getUserWithRoles(userId)
    .then((utilisateurAvecRoles) => {
      console.log('Utilisateur avec ses rôles :', utilisateurAvecRoles.Role);
    })
    .catch((error) => {
      console.error('Erreur :', error);
    });

  module.exports = {
    getRoles,
  };
