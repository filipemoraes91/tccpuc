const Usuario = require('../models/usuarioModel');
const auth = require('../auth');

const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    
    // Consulta o usuario no banco de dados
    const [usuario] = await Usuario.getUsuario(email, senha);
    if (!usuario) {
      return res.status(401).json({ auth: false, message: 'Falha na autenticação.' });
    }

    const token = auth.generateToken(usuario.id);
    
    res.status(200).json({ auth: true, token, usuario: usuario[0]  });
  } catch (error) {
    res.status(500).json({ auth: false, message: 'Erro no servidor.' });
    console.log('erro server');
  }
};

module.exports = {
  login
}