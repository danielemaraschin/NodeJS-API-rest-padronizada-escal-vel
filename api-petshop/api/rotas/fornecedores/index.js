const roteador = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')
                                                        //metodo async-await pq é funcao de promessa
roteador.use('/', async (requisicao, resposta) => {     //async antes de declarar a funcao
    const resultados = await TabelaFornecedor.listar()  //funcao de promessa (assim como na funcao de criar tabelas)
    resposta.send(
        JSON.stringify(resultados)
    )                                
})                                                      

module.exports = roteador