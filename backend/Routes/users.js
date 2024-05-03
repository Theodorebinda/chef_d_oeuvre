const express = require('express');
const userRouter = express.Router();
const {getUsers, postUsers} = require('../Controllers/users');



// Route pour obtenir les réunions d'un utilisateur par son ID
// userRouter.get('/:userId/meetings', getUserMeetings);
userRouter.get('/users', getUsers).post('/users', postUsers);



module.exports = userRouter;