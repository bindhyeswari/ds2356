var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var User = mongoose.model('User', {
    email: { type: String, required: true },
    password: { type: String, required: true }, // hash the password before storing using md5 or a better and more robust hashing system
    city: { type: String, required: true }
});



/* GET users listing. */
router.get('/', function(req, res) {
  User.find(function (err, users) {
      if (err)
          res.json(500, { message: 'Something went wrong', data: err});
      else
          res.json(200, users);
  });
});

router.post('/', function (req, res) {
    console.log(req.body);
    // users.push(req.body);


    (new User(req.body)).save(function (err, result) {
        if (err)
            res.json(500, { message: 'Something went wrong', data: err});
        else
            res.json(200, { message: 'User created!' });
    });


});

module.exports = router;
