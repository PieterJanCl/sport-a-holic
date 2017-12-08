var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy(
    function (username, passwoord, done) {
        User.findOne({
            username: username
        }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {
                    message: 'Gebruikersnaam is niet correct.'
                });
            }
            if (!user.validPassword(passwoord)) {
                return done(null, false, {
                    message: 'Wachtwoord if fout.'
                });
            }
            return done(null, user);
        });
    }));
