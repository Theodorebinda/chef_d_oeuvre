const express = require('express');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const server = express();


const users = await prisma.users.findMany();
console.log(users);


server.get('/', (req, res) => {
    res.send('Hello World!');
});
server.get('/users', (req, res) => {
    res.send('users!');
});

server.get('/users/:handle',  (req, res) => {
    const handle = req.params.handle; 
    const users = req.parsedJson.users; 

    // Rechercher l'utilisateur dans la liste des utilisateurs
    const user = users.find((user) => user.handle === handle);
    if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    // Renvoyer les détails de l'utilisateur trouvé
    res.json(user);
})

server.get('/sessions', (req, res) => {
    res.send('Session!');
});





const port = 3001; // Port d'écoute
server.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
