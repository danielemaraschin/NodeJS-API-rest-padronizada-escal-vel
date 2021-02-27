const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')  ////acessa o index
//padrao do sequelize é cada coluna é a chave de um objeto

const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.ENUM('ração', 'brinquedos'), // vai numerar as opcoes
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,          //manter o nome da tabela
    TableName: 'fornecedores', 
    timeStamps: true,   //sequelize dá informações de data entao é só 'ativar' timestamps
    createdAt:'dataCriacao', //renomeando pra portugues esse dado fornecido pelo timestamps do sequeliza
    updateAt: 'dataAtualizacao',
    version: 'versao' // sequelize vai criar uma versao

}
                                //nome da tabela/colunas/opcoes da tabela
module.exports = instancia.define('fornecedor', colunas, opcoes)