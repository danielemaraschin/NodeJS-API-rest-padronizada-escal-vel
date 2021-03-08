const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())


const jogosFavoritos = new Array ()

jogosFavoritos.push('super mário');

console.log(jogosFavoritos)