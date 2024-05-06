const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const prisma = require('../db/prisma');


const loginPost = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await prisma.users.findUnique({
      where: { email },
    });

    // If user not found or password is incorrect, return unauthorized
    if (!user || (await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, 'your-secret-key', {
      expiresIn: '1h', // Token expires in 1 hour
    });

    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}




module.exports ={
  loginPost
}
