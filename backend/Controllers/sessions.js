const prisma = require("../db/prisma");

const getSessions = async (req, res) => {
    try {
      const sessions = await prisma.sessions.findMany();
      res.json(sessions);
    } catch (err) {
      console.error('Error fetching items', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  module.exports = {
    getSessions,
  };

