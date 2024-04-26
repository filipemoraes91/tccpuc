const categoriaModel = require('../models/categoriaModel');

const getAll = async (req, res) => {
    const [categoria] = await categoriaModel.getAll();
    return res.status(200).json(categoria);
};

const getCategoria = async (req, res) => {
    const id = req.params.id;
    try {
        const categoria = await categoriaModel.getCategoria(id);
        return res.status(200).json(categoria);

    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
    }
}

const deleteCategoria = async (req, res) => {
    const id = req.params.id;
    try {
        const categoria = await categoriaModel.deleteCategoria(id);
        return res.status(200).json({ "message": "Perfil removido com sucesso!", "Item": categoria });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
    }
}

const putCategoria = async (req, res) => {
    try {
        const putCategoria = await categoriaModel.putCategoria(req.body);
        return res.status(200).json({ "message": "Perfil Alterado com sucesso!", "Item": putCategoria });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!" });
    }
}
const addCategoria = async (req, res) => {
    try {
        const addCategoria = await categoriaModel.addCategoria(req.body);
        return res.status(200).json({ "message": "Perfil cadastrado com sucesso!", "item": addCategoria });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!" });
    }
}
module.exports = {
    getAll,
    addCategoria,
    getCategoria,
    putCategoria,
    deleteCategoria
};