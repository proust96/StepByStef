var express = require('express');
var session = require('express-session');
var users = require('../ressources/users.json')
var router = express.Router();

router.use(session({secret:'XASDASDA', cookie: { maxAge: 60000 }}));

router.post('/', function(req, res){
    const user = users.filter(u => u.username === req.body.username)[0];
    var ssn = req.session; 
    ssn.user = user;
    res.redirect('/avancement');
    
});

module.exports = router;