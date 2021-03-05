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
    try{                                                //tentar rodar esse código
        const id = requisicao.params.idFornecedor
        const fornecedor = new Fornecedor({ id: id })
        await fornecedor.carregar()
        resposta.send(
            JSON.stringify(fornecedor)
        )
    }catch(erro){                                   //se tiver algum erro roda aki
        resposta.send(              //envia resposta do erro pra qm está consumindo a API
            JSON.stringify({    //passar um objeto
                mensagem: erro.message   //propriedade mensagem 
            })
        )
    }
})

roteador.put("/:idFornecedor", (requisicao, resposta) => {
    const id = requisicao.params.idFornecedor //pegar as info q está recebendo
    const dadosRecebidos = requisicao.body  //pegar o corpo da requisição
    const dados = Object.assign({}, dadosRecebidos, {id : id})    //juntar 2 objetos em 1 so para poder instanciar a classe fornecedor
    const fornecedor = new Fornecedor(dados)   // instanciar a classe fornecedor, mas ela só aceita um objeto pra conseguir instanciar

})

module.exports = roteador