const express = require('express');
const reunionRouter = express.Router();
const { getReunion } = require('../Controllers/reunion');

reunionRouter.get('/reunions',getReunion)

module.exports = reunionRouter;