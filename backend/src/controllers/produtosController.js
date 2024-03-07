const produtosModel = require('../models/produtosModel');

const getAll = async (req, res) => {
    const [produtos] = await produtosModel.getAll();
    return res.status(200).json(produtos);
};

const getProduto = async (req, res) => {
    const id = req.params.id;
    try {
        const produto = await produtosModel.getProduto(id);
        return res.status(200).json(produto);

    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
    }
}

const deleteProduto = async (req, res) => {
    const id = req.params.id;
    try {
        const produto = await produtosModel.deleteProduto(id);
        return res.status(200).json({ "message": "Produro removido com sucesso!", "Item": produto });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
    }
}

const putProduto = async (req, res) => {
    try {
        const putProduto = await produtosModel.putProduto(req.body);
        return res.status(200).json({ "message": "Produto Alterado com sucesso!", "Item": putProduto });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!" });
    }
}
const addProduto = async (req, res) => {
    try {
        const addProduto = await produtosModel.addProduto(req.body);
        return res.status(200).json({ "message": "Produto cadastrado com sucesso!", "item": addProduto });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!" });
    }
}
module.exports = {
    getAll,
    addProduto,
    getProduto,
    putProduto,
    deleteProduto
};