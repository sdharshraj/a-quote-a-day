var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('delhi', { title: 'New Delhi' });
});

module.exports = router;