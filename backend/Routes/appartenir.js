const express = require('express');
const { getAppartenir } = require('../Controllers/appartenir');
const appartenirRouter = express.Router();



appartenirRouter.get('/', getAppartenir)

module.exports = appartenirRouter;