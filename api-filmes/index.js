const express = require('express')      // precisamos usar o express para criar uma app
const app = express()                   //precisamos de uma instancia do express
const bodyParser = require('body-parser')
//bodyParser é o plug-in para nosso app
app.use(bodyParser.json())

            
app.listen(3000, () => console.log('A API está funcionando e aceitando requisições'))