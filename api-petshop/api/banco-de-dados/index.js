const Sequelize = require('sequelize')
const config = require('config')


const instancia = new Sequelize(
    config.get('mysql.banco-de-dados'),  //nome db
    config.get(' mysql.usuario'),    //usuario mysql
    config.get(' mysql.senha'),   //senha de teste
    {             //objeto para passar outras config na nossa conexão
        host: config.get('mysql.host'),        //ipe da maquina q estamos usando
        dialect: 'mysql'        //qual eh o tipo de db que está trabalhando
    }
)

module.exports = instancia