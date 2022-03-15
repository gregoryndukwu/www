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

/*
Postagem.create({
    titulo: "Um titulo qualquer",
    conteudo: "Lorem tsagdagdfgfd"
}) */

//Postagem.sync({force: true})

const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

//Usuario.sync({force: true})
Usuario.create({
    nome: 'Gregory',
    sobrenome: 'Ndukwu',
    idade: '36',
    email: 'test@test.com'
})

// CODE TO CHECK IF DATABASE IS CONNECT
/*
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro)
})
*/