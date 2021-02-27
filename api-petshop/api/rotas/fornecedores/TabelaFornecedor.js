const Modelo = require('./ModeloTabelaFornecedor')


module.exports = {          //exportar modulos q usamos na app através de um objeto
    listar () {             //listar esses módulos
        return Modelo.findAll() //findAll é um metodo ingles do sequelize
    }
}