const express = require('express');
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
const port = process.env.PORT;


Server.use(express.Router());
Server.use(express.json());
Server.use(express.urlencoded({ extended: true }));


Server.use('/users', userRouter);
Server.use('/sessions', sessionsRouter, checkUserRole);
Server.use('/reunions',reunionRouter );
Server.use('/messages', messageRouter);
Server.use('/connecter', connectRouter);
Server.use('/appartenir', appartenirRouter);
Server.use('/roles', rolesRouter);



// Routes pour les opérations PUT et DELETE

Server.listen(port, () => {
  console.log(`Server est lancée au port:${port}`);
});
