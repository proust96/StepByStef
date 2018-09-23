var express = require('express');
var session = require('express-session');
var router = express.Router();

var ssn;

router.use(session({secret:'XASDASDA'}));

router.get('/', function(req, res){
    ssn = req.session;
    res.render('accueil');
    
});

module.exports = router;