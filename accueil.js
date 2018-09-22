var express = require('express');
var session = require('express-session');
var router = express.Router();

router.use(session({secret:'XASDASDA'}));

var ssn;

router.get('/', function(req, res){
    //Afficher le formulaire de connexion

});

module.exports = router;