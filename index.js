var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser')
var login = require('./login.js');

var app = express();
app.use(session({secret:'XASDASDA'}));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.set('view engine', 'pug');
app.set('views','./views');

var ssn;


app.get('/', function(req, res){
    res.render('accueil');
 });

app.use('/login', login);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});