const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.push()

const jogosFavoritos = [];

//usou metodo post p/inserir um jogo na lista
app.post('api/jogos', (requisicao, resposta)=>{ 
    try{
        if(!requisicao.body.nome || !require.body.plataforma){
        throw new Error ('campo inválido')
        } 
        jogosFavoritos.push(requisicao.body)
        resposta.send(JSON.stringify(requisicao.body))
    } catch(erro){
        
    }
})

app.listen(3000, () => console.log('A API está funcionando!'))