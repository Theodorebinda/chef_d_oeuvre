const express = require('express');
const handleUserRouter = express.Router();
const { handleUser } = require('../Controllers/handleUser');



// Route pour obtenir les réunions d'un utilisateur par son ID
// userRouter.get('/:userId/meetings', getUserMeetings);
handleUserRouter.get('/', handleUser)



module.exports = handleUserRouter;