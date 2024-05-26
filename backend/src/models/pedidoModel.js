const connection = require('./conection');
const getAll = async () => {
    const getPedidos = await connection.execute(
        'SELECT * FROM pedidos ' +
        'INNER JOIN itenspedido ON itenspedido.PedidoID = pedidos.ID '
    );
    return getPedidos;
}

const getPedido = async (id) => {
    const qry = 'SELECT * FROM pedidos WHERE ID = ?';
    const ped = await connection.execute(qry, [id]);
    
    const itensQry = 'SELECT * FROM itenspedido ' +
    'INNER JOIN produtos ON Produtos.ID = itensPedido.ProdutoID ' +
    'WHERE itenspedido.PedidoID = ?';
    const itensPedido = await connection.execute(itensQry, [id]);
    
    const enderecoQry = 'SELECT * FROM enderecos WHERE ID = ?';
    const endereco = await connection.execute(enderecoQry, [ped[0][0].EntregaID]);
    
    const pedido = {
        ...ped[0][0],
        Endereco: endereco[0][0],
        Itens: itensPedido[0],
    };
    console.log(pedido)

    return pedido;
}

const getPedidos = async (id) => {
    const qry = 'SELECT * FROM pedidos WHERE UsuarioID = ?';
    const pedidos = await connection.execute(qry, [id]);
    return pedidos[0];
}

const addPedido = async (pedido) => {
    try {
        //Inserindo pedido
        const { DataPedido, TotalPedido, UsuarioID, EntregaID, FormaPagto, QtdeParcelas, Itens } = pedido;
        const qryPedido = 'INSERT INTO pedidos (DataPedido, TotalPedido, UsuarioID, EntregaID, FormaPagto, QtdeParcelas) values (?, ?, ?, ?, ?, ?)';
        const addPedido = await connection.execute(qryPedido, [DataPedido, parseFloat(TotalPedido), UsuarioID, EntregaID, FormaPagto, QtdeParcelas]);
        const ID = addPedido[0].insertId;

        // Inserindo Itens do pedido
        Itens.forEach(async item => {
            const { ProdutoID, Quantidade, Preco } = item;
            const qryItens = 'INSERT INTO itenspedido (PedidoID, ProdutoID, Quantidade, PrecoUnitario, Total) values (?, ?, ?, ?, ?)';
            const addItens = await connection.execute(qryItens, [ID, ProdutoID, Quantidade, parseFloat(Preco), 0]);
            return addItens;
        });

        //Removendo itens do carrinho
        const qryLimparCarrinho = 'DELETE FROM carrinhocompras where UsuarioID = ?';
        const deleteLimparCarrinho = await connection.execute(qryLimparCarrinho, [UsuarioID]);

        return { success: true, message: 'Pedido finalizado com sucesso!' };
    } catch (error) {
        return { success: false, message: 'Erro ao finalizar pedido.' };
    }
}

module.exports = {
    getAll,
    getPedido,
    getPedidos,
    addPedido
}
