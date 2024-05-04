const express = require('express');
const { getConnect } = require('../Controllers/connecter');
const connectRouter = express.Router();



connectRouter.get('/',getConnect)

module.exports = connectRouter;