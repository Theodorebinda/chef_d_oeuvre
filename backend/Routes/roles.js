const express = require('express');
const { getRoles } = require('../Controllers/roles');
const rolesRouter = express.Router();



rolesRouter.get('/',getRoles)

module.exports = rolesRouter;