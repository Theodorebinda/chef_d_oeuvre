const express = require('express');
const Server = express();
const userRouter = require('./Routes/users');
const sessionsRouter = require("./Routes/sessions");
const reunionRouter = require("./Routes/reunion");
const messageRouter = require("./Routes/messages");
const connectRouter = require("./Routes/connecter");
const appartenirRouter = require("./Routes/appartenir");
const rolesRouter = require("./Routes/roles");
const PORT = process.env.PORT || 3001;

Server.use(express.Router());
Server.use(express.json());
Server.use(express.urlencoded({ extended: true }));

Server.get('/', function (req, res) {
  res.send('Bonjour le monde !');
});

Server.get('/users', userRouter);
Server.post('/users', userRouter);
Server.get('/sessions', sessionsRouter);
Server.get('/reunions',reunionRouter );
Server.get('/messages', messageRouter);
Server.get('/connecter', connectRouter);
Server.get('/appartenir', appartenirRouter);
Server.get('/roles', rolesRouter);



// Routes pour les opérations PUT et DELETE

Server.listen(PORT, () => {
  console.log(`Server est lancée au port:${PORT}`);
});
