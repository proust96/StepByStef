var express = require('express');
var session = require('express-session');
var login = require('./routes/login.js');
var regles = require('./routes/regles.js');
var etape = require('./routes/etape.js');

var app = express();
app.use(session({secret:'XASDASDA'}));
app.use('/public', express.static(__dirname + '/public'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.set('view engine', 'pug');
app.set('views','./views');

var ssn;


app.get('/', function(req, res){
    res.render('accueil');
 });

app.use('/login', login);

app.use('/regles', regles);

app.use('/etape', etape);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});