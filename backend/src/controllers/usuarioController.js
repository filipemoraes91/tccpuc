const usuarioModel = require('../models/usuarioModel');
const auth = require('../auth');

const getUsuario = async (req, res) => {
  const id = req.params.id;
  try {
    const usuario = await usuarioModel.getUsuario(id);
    return res.status(200).json(usuario);

  } catch (error) {
    return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
  }
};

const putUsuario = async (req, res) => {
  try {
    const putUsuario = await usuarioModel.putUsuario(req.body);
    return res.status(200).json({ "message": "Produto Alterado com sucesso!", "Item": putUsuario });
  } catch (error) {
    return res.status(500).json({ "message": "Ops! Ocorreu algum erro!" });
  }
}

const addUsuario = async (req, res) => {
  try {
    const addUsuario = await usuarioModel.addUsuario(req.body);
    return res.status(201).json({ "message": "Cadastro realizado com sucesso!", "item": addUsuario[0] });
  } catch (error) {
    return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
  }
}

const getAll = async (req, res) => {
  const [usuarios] = await usuarioModel.getAll();
  return res.status(200).json(usuarios);
};


module.exports = {
  getUsuario,
  addUsuario,
  putUsuario,
  getAll
}