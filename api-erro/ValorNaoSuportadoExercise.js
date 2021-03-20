class ValorNaoSuportadoExercise extends Error{

    constructor (contentType) {
        super(`o tipo de conteúdo '${contentType}' n'ão é suportado.`)
        this.nome = 'ValorNaoSuportadoExercise'
        this.idErro = 3
    }
}

module.exports = ValorNaoSuportadoExercise