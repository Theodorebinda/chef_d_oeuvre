const prisma = require("../db/prisma");

const getAppartenir = async (req, res) => {
    try {
      const appartenir = await prisma.appartenir.findMany();
      res.json(appartenir);
    } catch (err) {
      console.error('Error fetching items', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  module.exports = {
    getAppartenir
  };