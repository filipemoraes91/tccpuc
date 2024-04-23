const authModel = require('../models/authModel');
const auth = require('../auth');

const getAuth = async (req, res) => {
  try {

    const [usuario] = await authModel.getAuth(req.body);
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
module.exports = {
  getAuth
}