var express = require('express');
var session = require('express-session');
var etapes = require('../ressources/etapes.json')
var router = express.Router();

var ssn;

router.use(session({secret:'XASDASDA'}));

router.get('/', function(req, res){
    ssn = req.session; 
    console.log(etapes);
    res.render('avancement', {etapes:etapes.etapes});
});

module.exports = router;