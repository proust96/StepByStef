var express = require('express');
var session = require('express-session');
var users = require('../ressources/users.json');
const PDFDocument = require('pdfkit');
var router = express.Router();

var ssn;

router.use(session({secret:'XASDASDA'}));

router.get('/', function(req, res){
    ssn = req.session; 
    const doc = new PDFDocument();
    let filename = ssn.user.prenom + "-" + ssn.user.nom;
    filename = encodeURIComponent(filename) + '.pdf';
    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
    res.setHeader('Content-type', 'application/pdf');
    const content = "test";
    doc.y = 300;
    doc.text(content, 50, 50);
    doc.pipe(res);
    doc.end();
});

module.exports = router;