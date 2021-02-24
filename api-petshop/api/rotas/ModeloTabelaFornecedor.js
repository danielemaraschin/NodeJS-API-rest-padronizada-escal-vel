const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')
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
        type: Sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,          //manter o nome da tabela
    TableName: 'fornecedores', 
    timeStamps: true,   //sequelize dá informações de data entao é só 'ativar' timestamps
    createdAt:'dataCriacao', //dar um nome para esse dado fornecido pelo timestamps
    updateAt: 'dataAtualizacao',
    version: 'versao' //vai criar uma versao

}

module.exports = instancia.define('fornecedor', colunas, opcoes)