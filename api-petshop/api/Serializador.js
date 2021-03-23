const ValorNaoSuportado = require('./erros/ValorNaoSuportado')

class Serializador { //serializar (transformar) dados em json 
    json (dados) {
        return JSON.stringify(dados)
    }

    serializar (dados){         //formato aceito é o 'application/json'
        if (this.contentType === 'application/json') { //verifica se o tipo de formato aceito é json
            return this.json(dados)             //retorna os dados em json
        }
                                                    //emite esse erro se o formato não é possível 
        throw new ValorNaoSuportado(this.contentType) //de ser transformado em json
    }

    filtrarObjetos (dados) { //quando listar os fornecedores não mostrar todos os dados
        const novoObjeto = {}
        const camposPublicos = [ 'id', 'empresa', 'categoria']
        
        camposPublicos.forEach((campo) => {
            if (dados.hasOwnProperty(campo)) {  //funcão pronta que retorna v/f
                novoObjeto[campo] = dados[campo]
            }
        })
            return novoObjeto
    }
}

class SerializadorFornecedor extends Serializador {//quando instanciar a classe coloca no constructor
    constructor (contentType) { //usa a var contentType para verficar o tipo de conteudo que tá aceitando por isso declarar no constructor
        super()
        this.contentType = contentType
    }
}

module.exports = {
    Serializador: Serializador,
    SerializadorFornecedor: SerializadorFornecedor,
    formatosAceitos: ['application/json']
}