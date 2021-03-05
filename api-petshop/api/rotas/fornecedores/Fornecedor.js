const TabelaFornecedor = require('./TabelaFornecedor') //conecta com db

class Fornecedor {
                                                                                            //METODO constructor 'constrói a classe' - parametro pode ser um objeto com os dados da classe (do fornecedor)
    constructor ({id, empresa, email, categoria, dataCriacao, dataAtualizacao, versao }){ // dentro desse método, devemos pegar cada valor desse deve ser passado para a propr da instancia
        this.id = id;
        this.empresa = empresa;
        this.email = email;
        this.categoria = categoria;
        this.dataCriacao = dataCriacao;
        this.dataAtualizacao = dataAtualizacao;
        this.versao = versao;
    }

    async criar (){
        const resultado = await TabelaFornecedor.inserir({
            empresa: this.empresa,
            email: this.email,
            categoria: this.categoria
        })

        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
        this.versao = resultado.versao
    }

    async carregar () {     //async pq usaremos essa função para comunicaccao com db
        const encontrado = await TabelaFornecedor.pegarPorId(this.id) //verficar se existe fornecdor com esse id
        this.empresa = encontrado.empresa
        this.email = encontrado.email
        this.categoria = encontrado.categoria
        this.dataCriacao = encontrado.dataCriacao
        this.dataAtualizacao = encontrado.dataAtualizacao
        this.versao = encontrado.versao
    }

    async atualizar (){
        await TabelaFornecedor.pegarPorId(this.id) // função já pronta no metodo carregar, só copiar
        const campos = ['empresa' , 'email', 'categoria'] //campos que podemos alterar
        const dadosParaAtualizar = {} // verifica se os campos foram fornecidos e sao validos

        campos.forEach((campo) =>  {
            const valor = this[campo]
            if (typeof valor === 'string' && valor.length > 0) { //os campos, por acaso sao strings entao podemos usar isso pra verificar
                dadosParaAtualizar[campo] = valor
            } 
        })
        
        if (Object.keys(dadosParaAtualizar).length === 0){
            throw new Error('Não foram fornecidos dados para atualizar')
        }

        await TabelaFornecedor.atualizar(this.id, dadosParaAtualizar)
    }
}
module.exports = Fornecedor