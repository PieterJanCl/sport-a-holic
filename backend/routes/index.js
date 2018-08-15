var express = require('express');
var router = express.Router();
let jwt = require('express-jwt');
let mongoose = require('mongoose');

let Sport = mongoose.model('Sport');
let Event = mongoose.model('Event');

let auth = jwt({
	secret: process.env.SPORT_BACKEND_SECRET,
	userProperty: 'payload'
});

// events
router.get('/API/events/', auth, function (req, res, next) {
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

router.post('/API/sports/', auth, function (req, res, next) {
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

module.exports = router;
