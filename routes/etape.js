var express = require('express');
var session = require('express-session');
var users = require('../ressources/users.json')
var etapes = require('../ressources/etapes.json')
var router = express.Router();

var ssn;

router.use(session({secret:'XASDASDA'}));

router.get('/:etapeId', function(req, res){
    ssn = req.session;
    var etapeId = req.params.etapeId;
    var etape = etapes.etapes.filter(x => x.id == etapeId)[0];
    res.render('etape_video',{etape:etape});
    
});

module.exports = router;