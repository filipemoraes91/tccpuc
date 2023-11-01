const produtosModel = require('../models/produtosModel');

const getAll = async (req, res) => {
    const [produtos] = await produtosModel.getAll();
    return res.status(200).json(produtos);
};

const addProduto = async (req, res) => {
    try {
        const addProduto = await produtosModel.addProduto(req.body);
        return res.status(200).json({ "message": "Produto cadastrado com sucesso!", "item": addProduto });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
    }
}
module.exports = {
    getAll,
    addProduto
};