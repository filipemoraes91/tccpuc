const enderecoModel = require('../models/enderecoModel');

const getAll = async (req, res) => {
  const [endereco] = await enderecoModel.getAll();
  return res.status(200).json(endereco);
};

const addEndereco = async (req, res) => {
  const addEndereco = await enderecoModel.addEndereco(req.body);
  return res.status(201).json({ "message": addEndereco });
}
module.exports = {
  getAll,
  addEndereco
};