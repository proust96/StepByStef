var express = require('express');
var session = require('express-session');
var users = require('../ressources/users.json')
var questions = require('../ressources/questions.json')
var corrections = require('../ressources/corrections.json')
var router = express.Router();

var ssn;

router.use(session({secret:'XASDASDA'}));

router.get('/', function(req, res){
    ssn = req.session; 
    let e = ssn.user.etape_actuelle;
    let q = ssn.user.question_actuelle;

    res.render('etape_question', {question:questions.questions.filter(x => x.etape_id == e && x.id == q)[0]});
    
});

router.get('/validation', function(req,res){
    ssn = req.session;
    let e = ssn.user.etape_actuelle;
    let q = ssn.user.question_actuelle;
    let answer = req.query.answers;
    let question = questions.questions.filter(x => x.etape_id == e && x.id == q)[0];
    let correc = corrections.corrections.filter(x => x.etape_id == e && x.id == q)[0];
    console.log(answer);
    if (question.reponse === answer || ssn.user.etape_actuelle == 9){
        if (questions.questions.filter(x => x.etape_id == e).length == q){
            if (ssn.user.etape_actuelle != 9)
            {
                ssn.user.question_actuelle = 1;
                ssn.user.etape_actuelle = 8;
                ssn.user.etapes_completees = [1,2,3,4,5,6,7,8];
            }else{
                ssn.user.fini = true;
                ssn.user.etape_actuelle = 10;
                ssn.user.question_actuelle = 1;
                ssn.user.etapes_completees = [1,2,3,4,5,6,7,8,9];
            }
        }
        else{
            ssn.user.question_actuelle = 2;
        }
        ssn.user.rate = false;
        res.render('correction', {ok:true, correction:correc});
    }
    else{
        ssn.user.rate = true;
        res.render('correction', {ok:false, correction:correc});
    }
});

module.exports = router;