const connection = require('./conection');
const getAll = async () => {
    const carrinhoCompras = await connection.execute(
        'SELECT * FROM CARRINHOCOMPRAS ' +
        'INNER JOIN PRODUTOS ON CARRINHOCOMPRAS.ProdutoID = PRODUTOS.ID ' +
        'INNER JOIN USUARIOS ON CARRINHOCOMPRAS.UsuarioID = USUARIOS.ID'
    );
    return carrinhoCompras;
}
const addItensCarrinho = async (item) => {
    console.log(item);
    const { usuarioID, produtoID, Quantidade } = item;
    const qry = 'INSERT INTO CARRINHOCOMPRAS (usuarioID, produtoID, Quantidade) values (?, ?, ?)';
    const addItensCarrinho = await connection.execute(qry, [usuarioID, produtoID, Quantidade]);
    return addItensCarrinho;
}

module.exports = {
    getAll,
    addItensCarrinho
}
