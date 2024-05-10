const express = require('express');
const prisma = require('../db/prisma');


const handleUser = async (req, res) => {
    try {
      const userId = parseInt(req.params.userId); // Récupérez l'ID de l'utilisateur depuis les paramètres de l'URL
      const user = await prisma.users.findUnique({ where: { id: userId } });

      if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }
      res.json(user);
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'utilisateur :', error);
      res.status(500).json({ error: 'Erreur serveur lors de la récupération de l\'utilisateur' });
    }
  }

module.exports = {
  handleUser
}
