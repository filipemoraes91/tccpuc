const pedidoModel = require('../models/pedidoModel');

const getAll = async (req, res) => {
    const [pedido] = await pedidoModel.getAll();
    return res.status(200).json(pedido);
};

const getPedido = async (req, res) => {
    const id = req.params.id;
    try {
        const pedido = await pedidoModel.getPedido(id);
        return res.status(200).json(pedido);
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
    }
}

const getPedidos = async (req, res) => {
    const id = req.params.id;
    try {
        const pedidos = await pedidoModel.getPedidos(id);
        return res.status(200).json(pedidos);
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
    }
}

const addPedido = async (req, res) => {
    try {
        const addPedido = await pedidoModel.addPedido(req.body);
        return res.status(200).json({ "message": "Pedido cadastrado com sucesso!", "item": addPedido });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!" });
    }
}

module.exports = {
    getAll,
    addPedido,
    getPedidos,
    getPedido
};