const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const prisma = require('../db/prisma');
require('dotenv').config();
const passport = require("passport");
const secretKey = process.env.SECRET_KEY;


async function authMidlUser(req, res, next) {
    passport.authenticate("local", async (err, user, info) => {
        try {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(401).json({ message: 'User non trouvéghwejhrek' });
            }

            // Vérification des identifiants de l'utilisateur dans la base de données
            const foundUser = await prisma.users.findUnique({ where: { email: req.body.email } });
            if (!foundUser) {
                return res.status(401).json({ message: 'L\'utilisateur n\'existe  pas avec cette adresse : ' + req.body.email });
            }
            // Si l'utilisateur est trouvé dans la base de données, nous le connectons
            req.login(foundUser, { session: false }, async (error) => {
                if (error) {
                    return next(error);
                }
                // Création du token JWT
                const token = jwt.sign({ id: foundUser.id, role: foundUser.Role }, secretKey, { expiresIn: '3m' });
                res.cookie('authToken', token, { httpOnly: true, secure: true });

                // Envoi du token JWT en réponse
                return res.status(200).json({token});
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
}

const logoutPost = async (req, res) => {
    // Supprimer le cookie en fixant une date d'expiration passée
    res.clearCookie('authToken');
    res.json({ success: true });
}



module.exports ={
    logoutPost,
    authMidlUser
}
