class CampoVazio extends Error{                               //CampoVazio está herdando da classe ERROR
    constructor (campo) {   
        const mensagem = `O campo '${campo}' está inválido`
        super(mensagem)                                          //chamando o constructor da classe ERROR
        this.name = 'CampoVazio'
        this.idErro = 1                                         //já que o UsuarioNaoEncontrado é id = 0
    }
}

module.exports = CampoVazio