const express = require('express')
const app = express()
const bodyParser = require('body-parser')


//bodyParser é o plug-in para nosso app
app.use(bodyParser.json())

app.listen(3000, () => console.log('A API está funcionando'))