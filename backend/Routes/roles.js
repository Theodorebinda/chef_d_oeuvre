const express = require('express');
const { getRoles } = require('../Controllers/roles');
const rolesRouter = express.Router();



rolesRouter.get('/roles',getRoles)

module.exports = rolesRouter;