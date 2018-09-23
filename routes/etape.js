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
    console.log(etapeId);
    if (etapeId == 9){
        ssn.user.titre_en_cours = etape.titre;
        res.redirect('/questions');
    }
    else{
        ssn.user.titre_en_cours = etape.titre;
        res.render('etape_video',{etape:etape, titre:etape.titre});
    }
    
});

module.exports = router;