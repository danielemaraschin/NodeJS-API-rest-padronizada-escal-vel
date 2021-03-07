const express = require('express')      // precisamos usar o express para criar uma app
const app = express() //precisamos de uma instancia do express
const bodyParser = require('body-parser')
const config = require('config')


//bodyParser é o plug-in para nosso app
app.use(bodyParser.json())

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)

            
app.listen(config.get('api.porta'), () => console.log('A API está funcionando'))  //para a app funcionar ela precisa escutar alguma porta 
                      //P1-porta       p2- funcao callback                        //metodo listen aceita 2 parametros