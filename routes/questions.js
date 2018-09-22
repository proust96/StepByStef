var express = require('express');
var session = require('express-session');
var users = require('../ressources/users.json')
var router = express.Router();

var ssn;

router.use(session({secret:'XASDASDA'}));

router.get('/', function(req, res){
    ssn = req.session; 
    res.render('etape_question');
    
});

router.post('/validation', function(req,res){
    ssn = req.session;
    
});

module.exports = router;