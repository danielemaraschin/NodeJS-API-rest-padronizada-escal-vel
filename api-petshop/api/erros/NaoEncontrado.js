class NaoEncontrado extends Error{   //classe naoEncontrado estende a classe error do js, pegando as propriedades que essa classe tem
    constructor (){  // instanciar naoEncontrado
        super('Fornecedor não encontrado') //instanciar a classe error pelo metodo super que é pronto, ja criado sozinho junto com a criacao da classe
        this.name = 'NaoEncontrado'  //nome da classe na instancia
        this.idErro = 0
    }
}


module.exports = NaoEncontrado