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
}

module.exports = {
    Serializador: Serializador,
    formatosAceitos: ['application/json']
}