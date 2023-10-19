const usuariosModel = require('../models/usuariosModel');

const getAll = async(req, res) => {
    const [usuario] = await usuariosModel.getAll();
    return res.status(200).json(usuario);
};

const addUsuario = async(req, res) => {
    console.log('addusuario')
    const addUsuario = await usuariosModel.addUsuario(req.body);
    return res.status(201).json({"message" : addUsuario});
}
module.exports = {
    getAll,
    addUsuario
};