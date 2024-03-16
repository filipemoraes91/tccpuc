const perfilModel = require('../models/perfilModel');

const getAll = async (req, res) => {
    const [perfil] = await perfilModel.getAll();
    return res.status(200).json(perfil);
};

const getPerfil = async (req, res) => {
    const id = req.params.id;
    try {
        const perfil = await perfilModel.getPerfil(id);
        return res.status(200).json(perfil);

    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
    }
}

const deletePerfil = async (req, res) => {
    const id = req.params.id;
    try {
        const perfil = await perfilModel.deletePerfil(id);
        return res.status(200).json({ "message": "Perfil removido com sucesso!", "Item": perfil });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
    }
}

const putPerfil = async (req, res) => {
    try {
        const putPerfil = await perfilModel.putPerfil(req.body);
        return res.status(200).json({ "message": "Perfil Alterado com sucesso!", "Item": putPerfil });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!" });
    }
}
const addPerfil = async (req, res) => {
    try {
        const addPerfil = await perfilModel.addPerfil(req.body);
        return res.status(200).json({ "message": "Perfil cadastrado com sucesso!", "item": addPerfil });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!" });
    }
}
module.exports = {
    getAll,
    addPerfil,
    getPerfil,
    putPerfil,
    deletePerfil
};