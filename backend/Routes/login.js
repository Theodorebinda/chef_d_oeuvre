const express = require('express')
const { loginPost } = require('../middleware/register')
const loginRouter = express.Router()



loginRouter.post('/', loginPost)

module.exports = loginRouter