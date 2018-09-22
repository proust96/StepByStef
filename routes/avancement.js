var express = require('express');
var session = require('express-session');
var etapes = require('../ressources/etapes.json')
var users = require('../ressources/users.json')
var router = express.Router();

var ssn;

//TODO when ussing session we don't need this
var etape_actuelle=1;

router.use(session({secret:'XASDASDA'}));

router.get('/', function(req, res){
    ssn = req.session; 
    console.log(etapes);
    console.log(ssn);
    //TODO: session
    res.render('avancement', {etapes:etapes.etapes});
});

module.exports = router;