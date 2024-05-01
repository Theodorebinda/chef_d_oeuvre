const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('Hello World!');
});




const port = 3001; // Port d'écoute
server.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
