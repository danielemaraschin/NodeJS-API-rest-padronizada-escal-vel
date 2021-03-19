const express = require('express')      // precisamos usar o express para criar uma app
const app = express() //precisamos de uma instancia do express
const bodyParser = require('body-parser')
const config = require('config')
const NaoEncontrado = require('./erros/NaoEncontrado')
const CampoInvalido = require('./erros/CampoInvalido')
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos')
const ValorNaoSuportado = require('./erros/ValorNaoSuportado')

//bodyParser é o plug-in para nosso app
app.use(bodyParser.json())

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