var express = require('express');
var session = require('express-session');
var login = require('./routes/login.js');
var regles = require('./routes/regles.js');
var etape = require('./routes/etape.js');
var export_route = require('./routes/export.js');
var avancement = require('./routes/avancement.js');
var questions = require('./routes/questions.js')

var app = express();
app.use(session({secret:'XASDASDA'}));
app.use('/public', express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views','./views');

var ssn;


app.get('/', function(req, res){
    res.render('accueil');
 });

app.use('/login', login);

app.use('/regles', regles);

app.use('/etape', etape);

app.use('/questions', questions);

app.use('/export', export_route);

app.use('/avancement', avancement);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});