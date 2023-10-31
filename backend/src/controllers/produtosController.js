const produtosModel = require('../models/produtosModel');

const getAll = async(req, res) => {
    const [produtos] = await produtosModel.getAll();
    return res.status(200).json(produtos);
};

const addProduto = async(req, res) => {
    const addProduto = await produtosModel.addProduto(req.body);
    return res.status(201).json({"message" : addProduto});
}
module.exports = {
    getAll,
    addProduto
};