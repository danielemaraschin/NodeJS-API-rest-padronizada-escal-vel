const roteador = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')
const Fornecedor = require('./Fornecedor')

                                                       //metodo async-await pq é funcao de promessa
roteador.get('/', async (requisicao, resposta) => {     //async antes de declarar a funcao
    const resultados = await TabelaFornecedor.listar()  //funcao de promessa (assim como na funcao de criar tabelas)
    resposta.send(
        JSON.stringify(resultados)
    )                                
})       


roteador.post('/', (requisicao, resposta) => {
    const dadosRecebidos = requisicao.body
})

module.exports = roteador