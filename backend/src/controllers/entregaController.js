const entregaModel = require('../models/entregaModel');

const getAll = async (req, res) => {
    const [entrega] = await entregaModel.getAll();
    return res.status(200).json(entrega);
};

const getEntrega = async (req, res) => {
    const id = req.params.id;
    try {
        const entrega = await entregaModel.getEntrega(id);
        return res.status(200).json(entrega);
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
    }
}

const deleteEntrega = async (req, res) => {
    const id = req.params.id;
    try {
        const entrega = await entregaModel.deleteEntrega(id);
        return res.status(200).json({ "message": "Entrega removido com sucesso!", "Item": entrega });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
    }
}

const putEntrega = async (req, res) => {
    try {
        const putEntrega = await entregaModel.putEntrega(req.body);
        return res.status(200).json({ "message": "Entrega alterado com sucesso!", "Item": putEntrega });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!" });
    }
}
const addEntrega = async (req, res) => {
    try {
        const addEntrega = await entregaModel.addEntrega(req.body);
        return res.status(200).json({ "message": "Entrega cadastrado com sucesso!", "item": addEntrega });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!" });
    }
}
module.exports = {
    getAll,
    addEntrega,
    getEntrega,
    putEntrega,
    deleteEntrega
};