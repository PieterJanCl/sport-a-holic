var express = require('express');
var router = express.Router();

router.get('/API/register/', function(req, res, next) {
  res.send("process the request here");
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
