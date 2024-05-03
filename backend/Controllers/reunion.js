const prisma = require("../db/prisma");

const getReunion = async (req, res) => {
    try {
      const reunions = await prisma.Reunion.findMany();
      res.json(reunions);
    } catch (err) {
      console.error('Error fetching items', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }


  module.exports = {
   
    getReunion
  };