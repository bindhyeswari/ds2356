var express = require('express');
var router = express.Router();

var users = [];

/* GET users listing. */
router.get('/', function(req, res) {
  res.json(200, users)
});

router.post('/', function (req, res) {
    console.log(req.body);
    users.push(req.body);
    res.json(200, { message: 'Successfully added user! '});
});

module.exports = router;
