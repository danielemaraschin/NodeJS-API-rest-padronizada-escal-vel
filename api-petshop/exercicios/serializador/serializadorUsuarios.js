class SerializadorUsuario extends SerializadorExerc {//quando instanciar a classe coloca no constructor
    constructor(contentType) { //usa a var contentType para verficar o tipo de conteudo que tá aceitando por isso declarar no constructor
        super()
        this.contentType = contentType
        this.camposPublicos = ['nome']
    }
}

