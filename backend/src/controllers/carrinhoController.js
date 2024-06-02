const carrinhoModel = require('../models/carrinhoModel');

const getAll = async (req, res) => {
    const id = req.params.id;
    const [itens] = await carrinhoModel.getAll(id);
    return res.status(200).json(itens); 
};

const getQtdeItens = async (req, res) => {
    const id = req.params.id;
    const [itens] = await carrinhoModel.getAll(id);
    return res.status(200).json({ itens: itens.length });
};

const addItensCarrinho = async (req, res) => {
    try {
        const addItensCarrinho = await carrinhoModel.addItensCarrinho(req.body);
        return res.status(201).json({ "message": "Item adicionado com sucesso!", "Item": addItensCarrinho[0] });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
    }
}

const removeItensCarrinho = async (req, res) => {
    const id = req.params.id;
    try {
        const item = await carrinhoModel.removeItensCarrinho(id);
        return res.status(200).json({ "message": "Item removido com sucesso!", "Item": item });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
    }
}
module.exports = {
    getAll,
    getQtdeItens,
    addItensCarrinho,
    removeItensCarrinho
};