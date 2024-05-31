const jwt = require('jsonwebtoken');
require('dotenv').config()

// Defina sua chave secreta para assinatura do token
const secretKey = tccpuc@minas;

// Middleware para verificar o token
function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).json({ auth: false, message: 'Token não fornecido.' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(500).json({ auth: false, message: 'Falha na autenticação do token.' });
    }

    // Se o token for válido, armazene os detalhes do usuário no request para uso posterior
    req.userId = decoded.id;
    next();
  });
}

// Função para gerar um token
function generateToken(userId) {
  return jwt.sign({ id: userId }, secretKey, {
    expiresIn: 86400, // Expira em 24 horas (ajuste conforme necessário)
  });
}

module.exports = { verifyToken, generateToken };
