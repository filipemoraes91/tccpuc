const enderecoModel = require('../models/enderecoModel');

const getAll = async (req, res) => {
    const id = req.params.id;
    const [endereco] = await enderecoModel.getAll(id);
    return res.status(200).json(endereco);
};

const getEndereco = async (req, res) => {
    const id = req.params.id;
    try {
        const endereco = await enderecoModel.getEndereco(id);
        return res.status(200).json(endereco);
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
    }
}

const deleteEndereco = async (req, res) => {
    const id = req.params.id;
    try {
        const endereco = await enderecoModel.deleteEndereco(id);
        return res.status(200).json({ "message": "Endereco removido com sucesso!", "Item": endereco });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
    }
}

const putEndereco = async (req, res) => {
    try {
        const putEndereco = await enderecoModel.putEndereco(req.body);
        return res.status(200).json({ "message": "Endereco alterado com sucesso!", "Item": putEndereco });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!" });
    }
}
const addEndereco = async (req, res) => {
    try {
        const addEndereco = await enderecoModel.addEndereco(req.body);
        return res.status(200).json({ "message": "Endereco cadastrado com sucesso!", "item": addEndereco });
    } catch (error) {
        return res.status(500).json({ "message": "Ops! Ocorreu algum erro!" });
    }
}
module.exports = {
    getAll,
    addEndereco,
    getEndereco,
    putEndereco,
    deleteEndereco
};