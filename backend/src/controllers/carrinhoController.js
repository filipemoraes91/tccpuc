const carrinhoModel = require('../models/carrinhoModel');

const getAll = async (req, res) => {
    const [itens] = await carrinhoModel.getAll();
    return res.status(200).json(itens);
};

const getQtdeItens = async (req, res) => {
    const [itens] = await carrinhoModel.getAll();
    return res.status(200).json({ itens: itens.length });
};

const addItensCarrinho = async (req, res) => {
    const addItensCarrinho = await carrinhoModel.addItensCarrinho(req.body);
    return res.status(201).json({ "message": addItensCarrinho });
}
module.exports = {
    getAll,
    getQtdeItens,
    addItensCarrinho
};