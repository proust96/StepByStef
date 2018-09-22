var express = require('express');
var session = require('express-session');
var router = express.Router();

var ssn;

router.use(session({secret:'XASDASDA'}));

router.post('/', function(req, res){
    //faire le login
});

module.exports = router;