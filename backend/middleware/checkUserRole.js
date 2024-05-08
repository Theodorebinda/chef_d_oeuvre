const prisma = require("../db/prisma");

// Middleware pour vérifier les rôles d'utilisateur
const checkUserRole = async (req, res, next) => {
    try {
      // Récupérer l'ID de l'utilisateur à partir de la session ou du jeton d'authentification
      const userId = prisma.connecter.usersId;
  
      // Rechercher l'utilisateur dans la base de données avec ses rôles
      const user = await prisma.users.findUnique({
        where: { id: userId },
        include: { Role: true }
      });
      // Vérifier si l'utilisateur a les rôles requis (mentor)
      if (user && user.Role.some(role => role.nom === 'mentor')) {
        // L'utilisateur a le rôle requis, passer à la route suivante
        next();
      } else {
        // L'utilisateur n'a pas le rôle requis, renvoyer une réponse d'erreur
        res.status(403).json({ error: "Vous n'avez pas les autorisations nécessaires pour accéder à cette ressource." });
      }
    } catch (error) {
      // Gérer les erreurs
      console.error("Une erreur s'est produite :", error);
      res.status(500).json({ error: "Une erreur s'est produite lors de la vérification des autorisations." });
    }
  };
  module.exports = checkUserRole

  