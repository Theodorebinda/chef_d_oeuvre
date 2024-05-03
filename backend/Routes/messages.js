const express = require('express');
const messageRouter = express.Router();
const { getMessages } = require('../Controllers/message');

messageRouter.get('/messages',getMessages)

module.exports = messageRouter;