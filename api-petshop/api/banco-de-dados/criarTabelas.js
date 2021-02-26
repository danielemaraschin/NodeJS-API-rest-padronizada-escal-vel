const ModeloTabela = require('../rotas/fornecedores/ModeloTabelaFornecedor.js')

ModeloTabela
    .sync()         //sincronizar uma 'promessa'
    .then(() => console.log('Tabela criada com sucesso'))