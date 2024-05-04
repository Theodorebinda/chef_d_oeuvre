const express = require('express');
const messageRouter = express.Router();
const { getMessages } = require('../Controllers/message');

messageRouter.get('/',getMessages)

module.exports = messageRouter;