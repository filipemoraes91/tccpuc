const connection = require('./conection');

async function getAuth(user) {
    const { Email, Senha } = user;
    const query = 'SELECT *  FROM usuarios WHERE Email = ? AND Senha = ?';
    const usuario = await connection.execute(query, [Email, Senha]);
    return usuario;
}

module.exports = {
    getAuth
}
