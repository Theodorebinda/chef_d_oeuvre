const express = require('express')
const { authMidlUser } = require('../middleware/register')
const loginRouter = express.Router()



loginRouter.post("/", authMidlUser)

module.exports = loginRouter