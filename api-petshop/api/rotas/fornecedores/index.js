const roteador = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')
const Fornecedor = require('./Fornecedor')

                                                       //metodo async-await pq é funcao de promessa
roteador.get('/', async (requisicao, resposta) => {     //async antes de declarar a funcao
    const resultados = await TabelaFornecedor.listar()  //funcao de promessa (assim como na funcao de criar tabelas)
    resposta.status(200) //padrao express é 200 e get sempre 200 tb, mas vamos colocar so pra ficar mais claro no codigo
    resposta.send(
        JSON.stringify(resultados)
    )                                
})       


roteador.post('/', async (requisicao, resposta) => {
    try{
        const dadosRecebidos = requisicao.body
        const fornecedor = new Fornecedor(dadosRecebidos)
        await fornecedor.criar() //espera criar fornecedor para realizar a função async
        resposta.status(201)//status de 'criado'
        resposta.send(
            JSON.stringify(fornecedor)
        )
    }catch (erro) {
        resposta.status(400)
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

roteador.get('/:idFornecedor', async (requisicao, resposta) => {
    try{      //tentar rodar esse código
        const id = requisicao.params.idFornecedor
        const fornecedor = new Fornecedor({ id: id })
        await fornecedor.carregar()
        resposta.status(200)
        resposta.send(
            JSON.stringify(fornecedor)
        )
    }catch(erro){//se tiver algum erro roda aki
        resposta.send(              //envia resposta do erro pra qm está consumindo a API
            JSON.stringify({    //passar um objeto
                mensagem: erro.message   //propriedade mensagem 
            })
        )
    }
})

roteador.put("/:idFornecedor", async (requisicao, resposta) => {
    try{
        const id = requisicao.params.idFornecedor //pegar as info q está recebendo
        const dadosRecebidos = requisicao.body  //pegar o corpo da requisição
        const dados = Object.assign({}, dadosRecebidos, {id : id})    //juntar 2 objetos em 1 so para poder instanciar a classe fornecedor
        const fornecedor = new Fornecedor(dados)   // instanciar a classe fornecedor, mas ela só aceita um objeto pra conseguir instanciar
        await fornecedor.atualizar() //ao atualizar numa api rest não precisa retornar nada pra quem consome a api, so mostrar que a requisicao funcionou.
        resposta.status(204)
        resposta.end()
    } catch (erro) {
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

roteador.delete('/:idFornecedor', async (requisicao, resposta) => {
    try{    const id = requisicao.params.idFornecedor //busca o id
            const fornecedor = new Fornecedor({ id: id}) //Instanciar a classe c/o unico parametro q temos desse obje é o id
            await fornecedor.carregar() //pegar id e verificar no db se existe
            await fornecedor.remover()
            resposta.status(204)
            resposta.end() //finalizar a requisicao
    }catch(erro){ //se o id não existir
        resposta.send(       //objeto  com a propriedade mensagem para
            JSON.stringify({// enviar a msg de erro pro usuario
            mensagem: erro.message
            })
        )   
    }
})

module.exports = roteador