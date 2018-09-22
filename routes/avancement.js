var express = require('express');
var session = require('express-session');
var etapes = require('../ressources/etapes.json')
var users = require('../ressources/users.json')
var router = express.Router();

router.use(session({secret:'XASDASDA'}));

router.get('/', function(req, res){
    var ssn = req.session; 
    console.log(ssn);
    console.log(ssn.user.nom)
    var user = ssn.user
    console.log(user)
    res.render('avancement', {etapes:etapes.etapes,user:user});
});

router.get('/:ava', function(req, res){
    var ssn = req.session; 
    ssn.user.etape_actuelle = 9;
    res.redirect('/avancement');
});


module.exports = router;