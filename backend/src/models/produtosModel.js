const connection = require('./conection');

const getAll = async () => {
    const produtos = await connection.execute(
        'SELECT * FROM PRODUTOS'
    );
    return produtos;
}
const addProduto = async(produto) => {
    const {nome, descricao, preco, estoque} = produto;
    const qry = 'INSERT INTO PRODUTOS (nome, descricao, preco, estoque) values (?, ?, ?, ?)';
    console.log(qry);
    const addProduto =  await connection.execute(qry,[nome, descricao, preco, estoque]);
    return addProduto;
}

module.exports ={
    getAll,
    addProduto
}
