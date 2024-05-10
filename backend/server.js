const express = require('express');
const passport = require("passport");
const cors = require('cors');
const bodyParser = require('body-parser');
const Server = express();
const cookieParser = require('cookie-parser');
require('dotenv').config();
const userRouter = require('./Routes/users');
const sessionsRouter = require("./Routes/sessions");
const reunionRouter = require("./Routes/reunion");
const messageRouter = require("./Routes/messages");
const connectRouter = require("./Routes/connecter");
const configPassport = require('./service/passportConfig');
const appartenirRouter = require("./Routes/appartenir");
const rolesRouter = require("./Routes/roles");
const checkUserRole = require('./middleware/checkUserRole');
const loginRouter = require('./Routes/login');
const { verifyToken } = require('./middleware/verifyToken');
const getUserWithRolesRouter = require('./Routes/userWithRole');
const handleUserRouter = require('./Routes/handleUser');
const { logoutPost } = require('./middleware/register');
const port = process.env.PORT;




passport.use(configPassport);
Server.use(cookieParser());
Server.use(passport.initialize());
Server.use(cors());
Server.use(bodyParser.json({ limit: '10mb' }));
Server.use(express.Router());
Server.use(express.json());
Server.use(express.urlencoded({ extended: true }));





Server.use('/users', userRouter);
Server.use('/users/:userId', handleUserRouter);
Server.use('/sessions',verifyToken, checkUserRole,sessionsRouter);
Server.use('/reunions',verifyToken, reunionRouter );
Server.use('/messages', verifyToken, messageRouter);
Server.use('/connecter', verifyToken, connectRouter);
Server.use('/appartenir', appartenirRouter);
Server.use('/roles', rolesRouter);
Server.use('/userRole', getUserWithRolesRouter);
Server.use('/login', loginRouter);
Server.use('/logout', logoutPost);



Server.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    res.status(400).send({ error: 'JSON invalide' });
  } else {
    next();
  }
});

Server.listen(port, () => {
  console.log(`Server est lancée au port:${port}`);
});
