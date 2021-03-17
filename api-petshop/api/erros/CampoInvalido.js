class CampoInvalido extends Error{ //CampoInvalido está herdando da classe ERROR
    constructor (campo) {
        const mensagem = `O campo '${campo}' está inválido`
        super(mensagem) //chamando o constructor da classe ERROR
    }
}