const express = require('express')      // precisamos usar o express para criar uma app
const app = express() //precisamos de uma instancia do express
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const UsuarioNaoEncontrado = require('./UsuarioNaoEncontrado')
const CampoVazio = require('./CampoVazio')
const ValorNaoSuportadoExercise = require('./ValorNaoSuportadoExercise')


app.put('/api/usuarios/:idUsuario', async (requisicao, resposta, proximo) => {
    try {
        const dados = requisicao.body
        const id = requisicao.params.idUsuario

        const encontrado = await TabelaDeUsuarios.pegarPorId(id)

        if (!encontrado) {
            throw new UsuarioNaoEncontrado('Usuário não encontrado')
        }

        if (dados.nome.length === 0) {
            throw new CampoVazio('O campo "nome" está vazio')
        }

        const usuario = new Usuario(Object.assign({}, dados, { id: id }))
        await usuario.atualizar()
        resposta.status(200)
        resposta.end()
    } catch (erro) {
        resposta.status(404)
        proximo(erro)
    }
})

app.listen(3000, () => console.log('A API está funcionando!'))