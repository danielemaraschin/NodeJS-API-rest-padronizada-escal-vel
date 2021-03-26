const ValorNaoSuportado = require('./erros/ValorNaoSuportado')
const jsontoxml = require('jsontoxml')

class Serializador { //serializar (transformar) dados em json 
    json(dados) {
        return JSON.stringify(dados)
    }

    xml(dados) { //instalar a biblioteca jsontoxml e chamara pelo require
        return jsontoxml ({ [this.tag]: dados}) //precisa ter uma tag pra agrupar todos os dados

    }
    serializar(dados) {         //formato aceito é o 'application/json' e 'application/xml'
        dados = this.filtrar(dados)
        if (this.contentType === 'application/json') { //verifica se o tipo de formato aceito é json
            return this.json(dados) //retorna dados em json
        }
        if (this.contentType === 'application/xml') {
            return this.xml(dados)
        }
        throw new ValorNaoSuportado(this.contentType) ////emite esse erro se o formato não é possível transformar em json
    }

    filtrarObjeto(dados) { //quando listar os fornecedores não mostrar todos os dados;
        const novoObjeto = {} //declara objeto vazio
        //camposPublicos está no constructor do serializadorFornecedor
        this.camposPublicos.forEach((campo) => { //itera em cada campo verificando se sao os campos publicos       
            if (dados.hasOwnProperty(campo)) {  //funcão pronta que retorna v/f - pergunta se dados tem o campo:id,OU empresa OU categoria
                novoObjeto[campo] = dados[campo]
            }
        })
        return novoObjeto //retorna um objeto filtrado so com os campos publicos
    }

    filtrar(dados) {
        if (Array.isArray(dados)) {                  //se 'dados' for um array fazer essa função
            dados = dados.map(item => {            //map é como o forEach que passa em cada item do array fazendo uma função e com o resultado dela cria um novo array
                return this.filtrarObjeto(item)         //a funcao filtrarObjetos já tem o forEach que processa esse objeto retornando um novo objeto com esse campos filtrados
            })
        } else {                                        //se 'dados' não for array sobreescreve dados por this.filtraObjetos(dados)
            dados = this.filtrarObjeto(dados)
        }
        return dados
    }
}


class SerializadorFornecedor extends Serializador {//quando instanciar a classe coloca no constructor
    constructor(contentType, camposExtras) { //usa a var contentType para verficar o tipo de conteudo que tá aceitando por isso declarar no constructor
        super()
        this.contentType = contentType
        this.camposPublicos = [ //mostrar somente os dados/propriedades publicas
            'id',
            'empresa',
            'categoria'
        ].concat(camposExtras || []) //pra nao dar indefined em campos extras caso não seja atribuido nenhum valor, colocar || [] que é = OU uma lista vazia.
        this.tag = 'fornecedor'
    }//esses campos extras são para a rota get/idFornecedor pq nessa rota queremos todos os detalhes do fornecedor, nao so os campos publicos
}

class SerializadorErro extends Serializador {
    constructor(contentType, camposExtras) {
        super()
        this.contentType = contentType
        this.camposPublicos = [
            'id',
            'mensagem'
        ].concat(camposExtras || [])
        this.tag = 'erro'
    }
}

module.exports = {
    Serializador: Serializador,
    SerializadorFornecedor: SerializadorFornecedor,
    SerializadorErro: SerializadorErro,
    formatosAceitos: ['application/json', 'application/xml']
}