const express = require('express');
const router = express.Router();
const { getUserMeetings } = require('../controllers/userController');

// Route pour obtenir les réunions d'un utilisateur par son ID
router.get('/:userId/meetings', getUserMeetings);

module.exports = router;
