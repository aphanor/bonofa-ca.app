require('dotenv').load();
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var sendgrid  = require('sendgrid')(process.env.SEND_GRID);
var email = new sendgrid.Email();

app.use(bodyParser.json());
app.set('port', 3000);
app.use(express.static(__dirname + '/build'));

// Handle 404
app.use(function(req, res) {
    res.status(400);
    res.redirect('/');
});

app.post('/email', function(req, res) {
    email.addTo(process.env.EMAIL);
    email.setFromName(req.body.nameuh);
    email.setFrom(req.body.from);
    email.setSubject('Bonofa-ca - Formulaire');
    email.setText(req.body.text);
    email.setHtml('<div style="text-align: center;"><h4>Yaw Gio! Vous avez reçu un email de <small style="color:#FFA500;">'+req.body.nameuh+'</small>.</h4><p>'+req.body.text+'</p></div>');
    
    email.setFilters({
        'templates': {
            'settings': {
                'enable': 1,
                'template_id' : process.env.TEMPLATE_ID
            }
        }
    });

    sendgrid.send(email, function(err, json) {
    if (err) { 
        return res.send("Problem Sending Email!");
    }
        console.log(json);
        res.send("Email Sent OK!");
    });
});

var server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port')  ) ;
});