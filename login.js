var express = require('express');
var session = require('express-session');
var users = require('./users.json')
var router = express.Router();

var ssn;

router.use(session({secret:'XASDASDA'}));

router.post('/', function(req, res){
    //faire le login
    ssn = req.session; 
    ssn.email = req.body.email;
    console.log(ssn.email);
});

module.exports = router;