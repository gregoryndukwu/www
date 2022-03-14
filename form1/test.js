const Sequelize = require('sequelize');
const sequelize = new Sequelize('test','root','12348765',{
    host: "localhost",
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.sync({force: true})

// CODE TO CHECK IF DATABASE IS CONNECT
/*
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro)
})
*/