var express = require('express');
var session = require('express-session');
var users = require('./ressources/users.json')
var router = express.Router();

var ssn;

router.use(session({secret:'XASDASDA'}));

router.post('/', function(req, res){
    //faire le login
    ssn = req.session; 
    let user = users.filter(u => u.matricule === req.body.matricule)[0];
    ssn.user = user;
    res.redirect('/profile');
});

module.exports = router;