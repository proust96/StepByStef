var express = require('express');
var session = require('express-session');
var users = require('./ressources/users.json')
var router = express.Router();

var ssn;

router.use(session({secret:'XASDASDA'}));

router.get('/', function(req, res){
    ssn = req.session; 
    res.render('profile', {nom:ssn.user.nom});
});

module.exports = router;