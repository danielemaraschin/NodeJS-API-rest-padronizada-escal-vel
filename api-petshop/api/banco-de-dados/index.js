const Sequelize = require('sequelize')


const instancia = new Sequelize(
    'petshop',  //nome db
    'roots',    //usuario mysql
    '123456',   //senha de teste
    {             //objeto para passar outras config na nossa conexão
        host: '127.0.0.1',        //ipe da maquina q estamos usando
        dialect: 'mysql'
    }
)

module.exports = instancia