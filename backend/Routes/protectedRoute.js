const express = require('express');
const protectedRouter = express.Router();
const { verifyToken } = require('../middleware/verifyToken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Endpoint for protected route
protectedRouter.get('/', verifyToken, (req, res) => {
  res.json({ message: 'Protected route', userId: req.userId });
});

module.exports = protectedRouter;
