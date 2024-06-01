const connection = require('./conection');
const getAll = async () => {
    const carrinhoCompras = await connection.execute(
        'SELECT * FROM carrinhocompras ' +
        'INNER JOIN produtos ON carrinhocompras.ProdutoID = produtos.ID '
    );
    return carrinhoCompras;
}

const addItensCarrinho = async (item) => {
    try {
        const { UsuarioID, ProdutoID, Quantidade } = item;
        const qry = 'INSERT INTO carrinhocompras (usuarioID, produtoID, Quantidade) values (?, ?, ?)';
        const addItensCarrinho = await connection.execute(qry, [UsuarioID, ProdutoID, Quantidade]);
        return addItensCarrinho;
    } catch (error) {
        console.error('Erro ao adicionar item ao carrinho:', error);
        // Capturando o erro específico do MySQL
        return { success: false, message: 'Erro ao adicionar usuário' };
    }

}


const removeItensCarrinho = async (id) => {
    const qry = 'DELETE FROM carrinhocompras WHERE ProdutoID = ?';
    const removeItensCarrinho = await connection.execute(qry, [id]);
    return removeItensCarrinho;
}

module.exports = {
    getAll,
    addItensCarrinho,
    removeItensCarrinho
}
