var express = require('express');
var session = require('express-session');
var users = require('../ressources/users.json')
var questions = require('../ressources/questions.json')
var router = express.Router();

var ssn;

router.use(session({secret:'XASDASDA'}));

router.post('/', function(req, res){
    ssn = req.session; 
    let rate = ssn.user.rate;
    if (rate){
        res.redirect('/questions');
    }else
    {
        if (ssn.user.question_actuelle > 1){
            res.redirect('/questions');
        }
        else{
            res.redirect('/avancement');
        }
    }
});

module.exports = router;