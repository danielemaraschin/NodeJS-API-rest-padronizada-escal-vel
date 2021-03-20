class UsuarioNaoEncontrado extends Error {
                             
    constructor () {   
        super('Usuário Não Encontrado')                                   
        this.name = 'UsuarioNaoEncontrado'
        this.idErro = 0                                         
    }
}

module.exports = UsuarioNaoEncontrado