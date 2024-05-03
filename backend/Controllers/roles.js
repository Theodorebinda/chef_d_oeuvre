const prisma = require("../db/prisma");

const getRoles = async (req, res) => {
    try {
      const roles = await prisma.role.findMany();
      res.json(roles);
    } catch (err) {
      console.error('Error fetching items', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  module.exports = {
    getRoles,
  };
