const prisma = require("../db/prisma");

const getMessages = async (req, res) => {
    try {
      const messages = await prisma.message.findMany();
      res.json(messages);
    } catch (err) {
      console.error('Error fetching items', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  module.exports = {
    getMessages
  };