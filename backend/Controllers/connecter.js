const prisma = require("../db/prisma");


const getConnect = async (req, res) => {
    try {
      const connecter = await prisma.connecter.findMany();
      res.json(connecter);
    } catch (err) {
      console.error('Error fetching items', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  module.exports = {
    getConnect
  };