const connection = require('./conection');

const addProduto = async (produto) => {
    const { Nome, Descricao, Preco, CategoriaID } = produto;
    const qry = 'INSERT INTO produtos (Nome, Descricao, Preco, CategoriaID) VALUES (?,?,?, ?)';
    const addProduto = await connection.execute(qry, [Nome, Descricao, Preco, CategoriaID]);
    return addProduto;
}


const putProduto = async (produto) => {
    const { Nome, Descricao, Preco, Estoque, CategoriaID, ID } = produto;
    console.log(produto);
    const qry = 'UPDATE produtos SET Nome = ?, Descricao = ?, Preco = ?, Estoque = ?, CategoriaID = ? WHERE ID = ?';
    const putProduto = await connection.execute(qry, [Nome, Descricao, Preco, Estoque, CategoriaID, ID]);
    console.log('alterado')
    return putProduto;
};

const getAll = async () => {
    const produtos = await connection.execute(
        'SELECT * FROM produtos'
    );
    return produtos;
}

const getProduto = async (id) => {
    const qry = 'SELECT * FROM produtos WHERE ID = ?';
    const produto = await connection.execute(qry, [id]);
    return produto[0];
}

const deleteProduto = async (id) => {
    const qry = 'DELETE FROM produtos WHERE ID=?';
    const deleteProduto = await connection.execute(qry, [id]);
    return deleteProduto;
};

module.exports = {
    getAll,
    getProduto,
    addProduto,
    putProduto,
    deleteProduto
}
