const express = require('express');
const { getUserWithRoles } = require('../Controllers/roles');
const getUserWithRolesRouter = express.Router()

getUserWithRolesRouter.get('/', getUserWithRoles);

module.exports = getUserWithRolesRouter;