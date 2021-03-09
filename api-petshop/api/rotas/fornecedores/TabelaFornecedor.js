const Modelo = require('./ModeloTabelaFornecedor')


module.exports = {          //exportar modulos q usamos na app através de um objeto
    listar () {             //listar esses módulos
        return Modelo.findAll() //findAll é um metodo ingles do sequelize para encontrar tudo
    },
    
    inserir(fornecedor){
        return Modelo.create(fornecedor)    //método create do sequelize
    },

    async pegarPorId (id) {
        const encontrado = await Modelo.findOne({ //metodo sequelize para encontrar 1
            where: {
                id:id
            }
        })
    
        if (!encontrado){
            throw new Error('Fornecedor não encontrado')
        }

        return encontrado
    },

    atualizar (id, dadosParaAtualizar) {
        return Modelo.update(
            dadosParaAtualizar, 
            {
                where: { id: id}    //atualizar os dados onde o id é o do fornecedor que queremos atualizar(p/atualizar os dados do fornecedor certo)
            }
        )
    },

    remover (id) {
        Modelo.destroy({
            where: {id: id}
        })
    }
}