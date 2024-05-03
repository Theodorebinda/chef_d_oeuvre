const express = require('express');
const { getConnect } = require('../Controllers/connecter');
const connectRouter = express.Router();



connectRouter.get('/connecter',getConnect)

module.exports = connectRouter;