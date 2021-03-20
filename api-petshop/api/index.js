const express = require('express')      // precisamos usar o express para criar uma app
const app = express() //precisamos de uma instancia do express
const bodyParser = require('body-parser')
const config = require('config')
const NaoEncontrado = require('./erros/NaoEncontrado')
const CampoInvalido = require('./erros/CampoInvalido')
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos')
const ValorNaoSuportado = require('./erros/ValorNaoSuportado')
const formatosAceitos = require('./Serializador').formatosAceitos

//bodyParser é o plug-in para nosso app
app.use(bodyParser.json())

app.use((requisicao, resposta, proximo) => { //header é um cabeçalho, pra saber qual o tipo de requisicao que o cliente da requisicao está aceitando
    const formatoRequisitado = requisicao.header('Accept') //cabeçalho 'accept' é aqueles valores que conseguimos passar fora do corpo no postman
    //indexOf funcao do js que pergunta a posicao dentro da lista do array
    if(formatosAceitos.indexOf(formatoRequisitado)=== -1 ){ //se resultado for -1 é pq não encontrou no array de formatos aceitos o formato requisitado
        resposta.status(406)
        resposta.end
    }
//definir nome cabeçalho(paramentro 1 é o nome do cabeçalho e o 2 é o conteudo)
    resposta.setHeader('Content-Type', formatoRequisitado)
    proximo()
})

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)

app.use((erro, requisicao, resposta, proximo) => {
    let status = 500

    if(erro instanceof NaoEncontrado){              //erro é uma instancia de NAOENCONTRADO
        status = 404                                //item nao encontrado ou nao existe   
    }
    if(erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos){
        status = 400
    }
    if (erro instanceof ValorNaoSuportado){
        status = 406 //status especifico quando o valor que o cliente está pedindo nao é suportado pela API
    }
    resposta.status(status)
    resposta.send(
        JSON.stringify({
            mensagem: erro.message,
            id: erro.idErro
        })
    )
})
            
app.listen(config.get('api.porta'), () => console.log('A API está funcionando'))  //para a app funcionar ela precisa escutar alguma porta 
                      //P1-porta       p2- funcao callback                        //metodo listen aceita 2 parametros