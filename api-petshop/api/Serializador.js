const ValorNaoSuportado = require('./erros/ValorNaoSuportado')

class Serializador { //serializar (transformar) dados em json 
    json (dados) {
        return JSON.stringify(dados)
    }

    serializar (dados){         //formato aceito é o 'application/json'
        if (this.contentType === 'application/json') { //verifica se o tipo de formato aceito é json
            return this.json(             //retorna os dados em json
                this.filtrarObjetos(dados) //mas antes filtra pra retornar só os dados publicos
            )
        }
                                                    //emite esse erro se o formato não é possível 
        throw new ValorNaoSuportado(this.contentType) //de ser transformado em json
    }

    filtrarObjetos (dados) { //quando listar os fornecedores não mostrar todos os dados;
        const novoObjeto = {} //declara objeto vazio
        //camposPublicos está no constructor do serializadorFornecedor
        this.camposPublicos.forEach((campo) => { //itera em cada campo verificando se sao os campos publicos       
            if (dados.hasOwnProperty(campo)) {  //funcão pronta que retorna v/f - pergunta se dados tem o campo:id,OU empresa OU categoria
                novoObjeto[campo] = dados[campo]
            }
        })
        return novoObjeto //retorna um objeto filtrado so com os campos publicos
    }
}


class SerializadorFornecedor extends Serializador {//quando instanciar a classe coloca no constructor
    constructor (contentType) { //usa a var contentType para verficar o tipo de conteudo que tá aceitando por isso declarar no constructor
        super()
        this.contentType = contentType
        this.camposPublicos = [ //mostrar somente os dados/propriedades publicas
            'id', 
            'empresa', 
            'categoria'
        ] 
    }
}

module.exports = {
    Serializador: Serializador,
    SerializadorFornecedor: SerializadorFornecedor,
    formatosAceitos: ['application/json']
}