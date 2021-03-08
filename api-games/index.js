const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const jogosFavoritos = []

//usou metodo post p/inserir um jogo na lista
app.post('/api/jogos', (requisicao, resposta) => {
    try {
        if (!requisicao.body.nome || !requisicao.body.plataforma) {
            throw new Error('campo inválido')
        }
        jogosFavoritos.push(requisicao.body)
        resposta.send(JSON.stringify(requisicao.body))
    } catch (erro) {
        resposta.send(JSON.stringify({ mensagem: erro.message }))
    }
})

app.get('/api/jogos', (requisicao, resposta) => {
    
    resposta.send(JSON.stringify(requisicao.body))
}

app.listen(3000, () => console.log('API está funcionando'))
