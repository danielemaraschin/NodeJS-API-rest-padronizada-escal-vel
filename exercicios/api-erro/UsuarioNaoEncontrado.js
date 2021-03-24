class UsuarioNaoEncontrado extends Error {
                             
    constructor (nome) {   
        const mensagem = `O campo '${nome}' está inválido`
        super(mensagem)                                  
        this.name = 'UsuarioNaoEncontrado'
        this.idErro = 0                                         
    }
}

module.exports = UsuarioNaoEncontrado