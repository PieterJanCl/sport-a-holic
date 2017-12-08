var express = require('express');
var router = express.Router();

let jwt = require('express-jwt');
let mongoose = require('mongoose');
let User = mongoose.model('User');
let auth = jwt({
  secret: process.env.SPORT_BACKEND_SECRET,
  userProperty: 'payload'
});


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/register/', function (req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({
      message: 'Please fill out all fields'
    });
  }
  let user = new User(req.body);
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

router.post('/login', function (req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({
      message: 'Please fill out all fields'
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
      return res.status(401).json(info);
    }
  })(req, res, next);
});

router.post('/checkusername', function (req, res, next) {
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