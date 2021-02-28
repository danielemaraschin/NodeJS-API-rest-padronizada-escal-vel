const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const produtos = [
  { nome: 'Bola de Basquete', categoria: 'esportes' },
  { nome: 'Bicicleta', categoria: 'esportes' },
  { nome: 'Batalha Naval', categoria: 'jogos-de-mesa' }
]

const produtosEmJson = JSON.stringify(produtos)

app.use('produto', (requisicao, resposta) => {
  resposta.send(produtosEmJson)
})