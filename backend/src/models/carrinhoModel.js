const connection = require('./conection');
const getAll = async () => {
    const carrinhoCompras = await connection.execute(
        'SELECT * FROM CARRINHOCOMPRAS ' +
        'INNER JOIN PRODUTOS ON CARRINHOCOMPRAS.ProdutoID = PRODUTOS.ID '
    );
    return carrinhoCompras;
}

const addItensCarrinho = async (item) => {
    const { usuarioID, produtoID, Quantidade } = item;
    const qry = 'INSERT INTO CARRINHOCOMPRAS (usuarioID, produtoID, Quantidade) values (?, ?, ?)';
    const addItensCarrinho = await connection.execute(qry, [usuarioID, produtoID, Quantidade]);
    return addItensCarrinho;
}


const removeItensCarrinho = async (item) => {
    const { ID } = item;
    const qry = 'DELETE FROM CARRINHOCOMPRAS WHERE ID = ?';
    const removeItensCarrinho = await connection.execute(qry, [ID]);
    return removeItensCarrinho;
}

module.exports = {
    getAll,
    addItensCarrinho,
    removeItensCarrinho
}
