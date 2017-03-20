var express = require('express');
var app = express();
var PORT= 3000;

var middleWare= require('./middleware.js')

app.use(middleWare.logger);


app.get('/about',middleWare.requireAunthentication,function(req,res){
	res.send('hello about!');
});

app.use(express.static(__dirname +'/public'));


app.listen(PORT,function(){
	console.log('Server is running on port '+ PORT);
});