var express =require('express');
var app=express();

app.get('/', function(req,res){
	res.end('Hello World !')
});

app.use(express.static('public'))


app.listen(process.argv[2])






