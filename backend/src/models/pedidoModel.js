const connection = require('./conection');
const getAll = async () => {
    const getPedidos = await connection.execute(
        'SELECT * FROM pedidos ' +
        'INNER JOIN itenspedido ON itenspedido.PedidoID = pedidos.ID '
    );
    return getPedidos;
}

// ID, DataPedido, TotalPedido, UsuarioID, EntregaID, FormaPagto, QtdeParcelas
const finalizarPedido = async (item) => {
    try {
        const ID = VerificarUltimoPedido();
        //Inserindo pedido
        const { DataPedido, TotalPedido, UsuarioID, EntregaID, FormaPagto, QtdeParcelas } = pedido;
        const qryPedido = 'INSERT INTO pedidos (DataPedido, TotalPedido, UsuarioID, EntregaID, FormaPagto, QtdeParcelas) values (?, ?, ?, ?, ?, ?)';
        const finalizarPedido = await connection.execute(qryPedido, [DataPedido, TotalPedido, UsuarioID, EntregaID, FormaPagto, QtdeParcelas]);

        //Inserindo Itens do pedido
        const { ProdutoID, Quantidade, PrecoUnitario, Total } = pedido;
        const qryItens = 'INSERT INTO pedidos (PedidoID, ProdutoID, Quantidade, PrecoUnitario, Total) values (?, ?, ?, ?, ?)';
        const finalizarItens = await connection.execute(qryItens, [ID, ProdutoID, Quantidade, PrecoUnitario, Total]);


        return finalizarPedido;
    } catch (error) {
        console.error('Erro ao finalizar pedido:', error);
        return { success: false, message: 'Erro ao finalizar pedido.' };
    }
}

const VerificarUltimoPedido = async () => {
    const qry = 'SELECT coalesce(max(ID),0) ID FROM pedidos;';
    const ultimo = await connection.execute(qry, []);
    return ultimo + 1;
}

module.exports = {
    getAll,
    finalizarPedido,
}
