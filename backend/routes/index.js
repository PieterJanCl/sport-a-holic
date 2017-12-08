var express = require('express');
var router = express.Router();
let passport = require('passport');
let jwt = require('express-jwt');
let mongoose = require('mongoose');
let User = mongoose.model('User');
let auth = jwt({
  secret: process.env.SPORT_BACKEND_SECRET,
  userProperty: 'payload'
});

router.post('/API/register', function (req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({
      message: 'Please fill out all fields correctly'
    });
  }
  
  let user = new User();
  
  user.username = req.body.username;
  user.setPassword(req.body.password)
  user.save(function (err) {
    if (err) {
      return next(err);
    }
    return res.json({
      token: user.generateJWT()
    })
  });
});

router.post('/API/login', function (req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({
      message: 'Please fill out all fields correctly'
    });
  }
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      
      return next(err);
    }
    if (user) {
      
      return res.json({
        token: user.generateJWT()
      });
    } else {
      console.log('help');
      return res.status(401).json(info);
    }
  })(req, res, next);
});

router.post('/API/checkusername', function (req, res, next) {
  User.find({
      username: req.body.username
    },
    function (err, result) {
      if (result.length) {
        res.json({
          'username': 'alreadyexists'
        })
      } else {
        res.json({
          'username': 'ok'
        })
      }
    });
});

module.exports = router;