var express = require('express');
var session = require('express-session');
var swal = require('sweetalert2');
var login = require('./routes/login.js');
var regles = require('./routes/regles.js');
var etape = require('./routes/etape.js');
var export_route = require('./routes/export.js');
var avancement = require('./routes/avancement.js');
var questions = require('./routes/questions.js');
var corrections = require('./routes/corrections.js');
var connexion = require('./routes/connexion.js');
var rhService = require('./routes/rhService.js');

var app = express();
app.use(session({secret:'XASDASDA'}));
app.use('/public', express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views','./views');

var ssn;


app.get('/', function(req, res){
    res.render('connexion');
 });

app.use('/connexion',connexion)

app.use('/rhService',rhService)

app.use('/login', login);

app.use('/regles', regles);

app.use('/etape', etape);

app.use('/questions', questions);

app.use('/export', export_route);

app.use('/avancement', avancement);

app.use('/corrections', corrections);

app.get('/fin', function(req, res){
  res.render('fin');
});

app.get('/signature', function(req, res){
  res.render('signature');
});

app.get('/flasher', function(req, res){
  res.render('flasher');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});