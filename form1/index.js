const express = require("express");
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }))
var qs = require('querystring');
//const handlebars = require('express-handlebars');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('test','root','12348765',{
    host: "localhost",
    dialect: 'mysql'
})

//config
app.set('view engine', 'pug');
app.set('views',__dirname + "/views/")
//app.engine('handlebars', handlebars({defaultLayout: 'main'}))
//app.set('view engine', 'handlebars')
//Template Engine

// Rotas
app.get('/', function(req,res){
    res.render('formulario')
})
/*
app.get('/cad', function(req,res){
    console.log(vals)
    res.send('formulario')
})*/

app.post('/cad', function(req,res){
    console.log(req.body.title)
    var title = req.body.title;
    res.send(title)
})


app.listen(3030, function(){
    console.log("Servidor Rodando");
})