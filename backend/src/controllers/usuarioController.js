const usuarioModel = require('../models/usuarioModel');
const auth = require('../auth');

const login = async (req, res) => {
  try {

    // Consulta o usuario no banco de dados
    const [usuario] = await usuarioModel.getUsuario(req.body);
    if (!usuario) {
      return res.status(401).json({ auth: false, message: 'Falha na autenticação.' });
    }

    const token = auth.generateToken(usuario.id);

    res.status(200).json({ auth: true, token, usuario: usuario[0] });
  } catch (error) {
    res.status(500).json({ auth: false, message: 'Erro no servidor.' });
    console.log('erro server');
  }
};

const addUsuario = async (req, res) => {
  try {
    const addUsuario = await usuarioModel.addUsuario(req.body);
    return res.status(201).json({ "message": "Cadastro realizado com sucesso!", "item": addUsuario[0] });
  } catch (error) {
    return res.status(500).json({ "message": "Ops! Ocorreu algum erro!", "error": error });
  }
}

module.exports = {
  login,
  addUsuario
}