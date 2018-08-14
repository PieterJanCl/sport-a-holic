var express = require('express');
var router = express.Router();
let jwt = require('express-jwt');
let mongoose = require('mongoose');
let User = mongoose.model('User');
let Sport = mongoose.model('Sport');
let Event = mongoose.model('Event');
let passport = require('passport');

let auth = jwt({
	secret: process.env.SPORT_BACKEND_SECRET,
	userProperty: 'payload'
});

// events
router.get('/API/events/', function (req, res, next) {
	Event.find(function(err, events) {
		if(err) { return next(err)}
		res.json(events)
	})
})

router.post('/API/events/', auth, function (req, res, next) {
	let event = new Event();
	event.sportName = req.body.sportName;
	event.date = req.body.date;
	event.uur = req.body.uur;
	event.user = req.body.user;
	event.save(function(err, rec) {
		if (err) {
			return next(err);
		}
		res.json(rec);
	})
})

// sports
router.get('/API/sports/', function (req, res, next) {
	Sport.find(function(err, sports) {
		if(err) { return next(err)}
		res.json(sports)
	})
})

router.post('/API/sports/', function (req, res, next) {
	let sport = new Sport();
	sport.name = req.body.name;
	sport.newSport = req.body.newSport;
	sport.save(function(err, rec) {
		if (err) {
			return next(err);
		}
		res.json(rec);
	})
});

// user
// registering
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

//login
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
			return res.status(401).json(info);
		}
	})(req, res, next);
});

router.post('/API/checkusername', function (req, res, next) {
	User.find(
		{
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
		}
	);
});

module.exports = router;