class Serializador { //serializar (transformar) dados em json 
    json (dados) {
        return JSON.stringify(dados)
    }

    serializar (dados){
        if (this.contentType === 'application/json') {
            return this.json(dados)
        }

        throw new Error ()
    }
}