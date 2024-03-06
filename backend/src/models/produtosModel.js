const connection = require('./conection');

const addProduto = async (produto) => {
    const { nome, descricao, preco, estoque } = produto;
    const qry = 'INSERT INTO PRODUTOS (nome, descricao, preco, estoque) values (?, ?, ?, ?)';
    const addProduto = await connection.execute(qry, [nome, descricao, preco, estoque]);
    return addProduto;
}

const getAll = async () => {
    const produtos = await connection.execute(
        'SELECT * FROM PRODUTOS'
    );
    return produtos;
}

const getProduto = async (id) => {
    const qry = 'SELECT * FROM PRODUTOS WHERE ID = ?';
    const produto = await connection.execute(qry, [id]);
    return produto[0];
}

const putProduto = async (produto) => {
    const { Nome, Descricao, Preco, Estoque, CategoriaID, ID } = produto;
    const qry = 'UPDATE PRODUTOS SET Nome=?, Descricao=?, Preco=?, Estoque=?, CategoriaID=? WHERE ID=?';
    const [result] = await connection.query(qry, [Nome, Descricao, Preco.replace(",", "."), Estoque, CategoriaID, ID]);
    return result.affectedRows;
};

const deleteProduto = async (id) => {
    const query = 'DELETE FROM PRODUTOS WHERE id=?';
    const [result] = await connection.query(query, [id]);
    return result.affectedRows;
};

module.exports = {
    getAll,
    getProduto,
    addProduto,
    putProduto,
    deleteProduto
}
