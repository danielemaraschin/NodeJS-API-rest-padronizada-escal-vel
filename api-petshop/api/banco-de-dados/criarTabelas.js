const ModeloTabela = require('../rotas/fornecedores/ModeloTabelaFornecedor')

ModeloTabela
    .sync() //sincronizar uma 'promessa' - funcao sync e não precisa esperar (await) nada pra criar a tabela
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)

   
