const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Server = express();
require('dotenv').config();
const userRouter = require('./Routes/users');
const sessionsRouter = require("./Routes/sessions");
const reunionRouter = require("./Routes/reunion");
const messageRouter = require("./Routes/messages");
const connectRouter = require("./Routes/connecter");
const appartenirRouter = require("./Routes/appartenir");
const rolesRouter = require("./Routes/roles");
const checkUserRole = require('./middleware/checkUserRole');
const protectedRouter = require('./Routes/protectedRoute');
const loginRouter = require('./Routes/login');
const port = process.env.PORT;

Server.use(bodyParser.json());
Server.use(express.Router());
Server.use(express.json());
Server.use(express.urlencoded({ extended: true }));


Server.use('/register', userRouter);
Server.use('/sessions', sessionsRouter, checkUserRole);
Server.use('/reunions',reunionRouter );
Server.use('/messages', messageRouter);
Server.use('/connecter', connectRouter);
Server.use('/appartenir', appartenirRouter);
Server.use('/roles', rolesRouter);
Server.use('/protected', protectedRouter);
Server.use('/login', loginRouter);



// // server.js

// const express = require('express');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const { PrismaClient } = require('@prisma/client');

// const prisma = new PrismaClient();
// const app = express();

// // Middleware for parsing JSON body
// app.use(bodyParser.json());

// // Endpoint for user registration
// app.post('/register', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Save the user to the database
//     const user = await prisma.user.create({
//       data: {
//         email,
//         password: hashedPassword,
//       },
//     });

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Endpoint for user login
// app.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find the user by email
//     const user = await prisma.user.findUnique({
//       where: { email },
//     });

//     // If user not found or password is incorrect, return unauthorized
//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ userId: user.id }, 'your-secret-key', {
//       expiresIn: '1h', // Token expires in 1 hour
//     });

//     res.json({ token });
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Middleware to verify JWT token
// const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized: No token provided' });
//   }

//   jwt.verify(token, 'your-secret-key', (err, decoded) => {
//     if (err) {
//       return res.status(403).json({ message: 'Unauthorized: Invalid token' });
//     }

//     req.userId = decoded.userId;
//     next();
//   });
// };

// // Example protected route
// app.get('/protected', verifyToken, (req, res) => {
//   res.json({ message: 'Protected route', userId: req.userId });
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


Server.listen(port, () => {
  console.log(`Server est lancée au port:${port}`);
});
