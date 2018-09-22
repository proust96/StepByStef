var express = require('express');
var session = require('express-session');
var users = require('../ressources/users.json')
var router = express.Router();

var ssn;

router.use(session({secret:'XASDASDA'}));

router.get('/', function(req, res){
    ssn = req.session; 
    ssn.user.vu_regles = true;
    res.render('regles', {user:ssn.user});
});

module.exports = router;