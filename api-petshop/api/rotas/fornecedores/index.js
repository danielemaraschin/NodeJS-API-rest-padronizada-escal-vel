const roteador = require('express').Router()
const ModeloTabela = require('./ModeloTabelaFornecedor')

roteador.use('/', (requisicao, resposta) => {
    resposta.send('ok')
})

module.exports = roteador