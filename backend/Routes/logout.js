const express = require('express')
const { logoutPost } = require('../middleware/register')
const loginRouter = express.Router()



loginRouter.post("/", logoutPost)

module.exports = loginRouter
