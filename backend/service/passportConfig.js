const bcrypt = require("bcrypt");
const passport = require("passport");
const prisma = require("../db/prisma");
const LocalStrategy = require("passport-local").Strategy;

const configPassport = new LocalStrategy({ usernameField: "email", passwordField: "password" },
    async (email, passport, done) => {
        const user = await prisma.users.findFirst({ where: { email } });
        if (!user) {
            return done(null, false, { message: "utilisateur introuvable" });
        }
        bcrypt.compare(passport, user.password, (err, isMatch) => {
            if (!user) {
                return done(err);
            }
            if (!isMatch) {
                return done(null, false, { message: "Mot de passe incorrect" });
            } else {
                return done(null,true, 'user');
            }
        });
    });

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((user, done) => {
    done(null, user)
})



module.exports = configPassport;

