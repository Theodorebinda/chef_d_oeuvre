async function getUserMeetings(req, res) {
    const userId = req.params.userId;
  
    try {
      // Effectuez une requête à votre base de données pour trouver les réunions associées à cet utilisateur
      const userMeetings = await Meeting.find({ userId: userId });
  
      // Envoyez les réunions trouvées en réponse
      res.json(userMeetings);
    } catch (error) {
      // Gérez les erreurs
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la récupération des réunions de l\'utilisateur' });
    }
  }
  
  module.exports = {
    getUserMeetings,
  };
  