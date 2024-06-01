const connection = require('./conection');

async function  getAuth(user) {
    const { Email, Senha } = user;
    const query = 'SELECT usuarios.ID, usuarios.Nome, perfil.Perm FROM usuarios ' +
    'inner join perfil on perfil.ID = usuarios.PerfilID ' +
    'WHERE usuarios.Email = ? AND usuarios.Senha = ?';
    const usuario = await connection.execute(query, [Email, Senha]);
    return usuario;
}

module.exports = {
    getAuth
}
