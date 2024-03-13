const favoritoModel = require('../models/favoritoModel');

const getAll = async (req, res) => {
    const [favoritos] = await favoritoModel.getAll();
    return res.status(200).json(favoritos);
};

const addFavorito = async (req, res) => {
    try {
        const addFavorito = await favoritoModel.addFavorito(req.body);
        return res.status(201).json({ "message": "Item adicionado com sucesso!", "Item": addFavorito[0] });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
    }
}

const removeFavorito = async (req, res) => {
    const id = req.params.id;
    try {
        const item = await favoritoModel.removeFavorito(id);
        return res.status(200).json({ "message": "Item removido com sucesso!", "Item": item });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
    }
}
module.exports = {
    getAll,
    addFavorito,
    removeFavorito
};