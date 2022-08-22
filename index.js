var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
   //res.send("Hello there, General Kenobi");
   //res.send("Hello there," + "\n" + "General Kenobo");
   res.render('first_view');
});

// app.get('/first_template', function(req, res){
//     res.render('first_view');
//  });

app.listen(3000);