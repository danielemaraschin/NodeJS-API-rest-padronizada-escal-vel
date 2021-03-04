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


roteador.post('/', async (requisicao, resposta) => {
    const dadosRecebidos = requisicao.body
    const fornecedor = new Fornecedor(dadosRecebidos)
    await fornecedor.criar() //espera criar fornecedor para realizar a função async
    resposta.send(
        JSON.stringify(fornecedor)
    )
})

roteador.get('/:idFornecedor', async (requisicao, resposta) => {
    const id = requisicao.params.idFornecedor
    const fornecedor = new Fornecedor({ id: id })
    await fornecedor.carregar()
    resposta.send(
        JSON.stringify(fornecedor)
    )
})

module.exports = roteador