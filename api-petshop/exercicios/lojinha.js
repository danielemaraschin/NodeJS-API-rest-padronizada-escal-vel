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

app.get('/api/produtos', (requisicao, resposta) => {
  resposta.send(produtosEmJson)
})

console.log(produtosEmJson);
console.log(produtos);


/*Com o código acima, quais alterações se deve 
fazer para que a API possa fornecer
uma lista de produtos?


Alterar o método: app.use() para app.get() e trocar a porção da URL para ‘/api/produtos’.


Usamos o método get() para obter dados de uma API, 
e quando estamos acessando uma URL com ‘/api’,
sabemos que estamos usando uma API, e pela porção ‘/produtos’,
 sabemos também que vamos obter dados de produtos - 
como está no plural, sabemos que serão vários produtos.




*/