const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')


//bodyParser é o plug-in para nosso app
app.use(bodyParser.json())

const roteador = require('./rotas/fornecedores')
app.use('api/fornecedores', roteador)

app.listen(config.get('api.porta'), () => console.log('A API está funcionando'))