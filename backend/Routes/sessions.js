const express = require('express');
const sessionsRouter = express.Router();
const { getSessions } = require("../Controllers/sessions");

sessionsRouter.get('/',getSessions)

module.exports = sessionsRouter;