const connection = require('./conection');

const getAll = async () => {
    const usuarios = await connection.execute(
        'SELECT * FROM usuarios'
    );
    return usuarios;
}

async function getUsuario(user) {
    const { Email, Senha } = user;
    const query = 'SELECT *  FROM usuarios WHERE Email = ? AND Senha = ?';
    const usuario = await connection.execute(query, [Email, Senha]);
    return usuario;
}

const addUsuario = async (usuario) => {
    try {
        const { Nome, Email, Senha, PerfilID } = usuario;
        console.log(Nome)
        const qry = 'INSERT INTO usuarios (Nome, Email, Senha, PerfilID) VALUES (?, ?, ?, ?)';
        const addUsuario = await connection.execute(qry, [Nome, Email, Senha, PerfilID]);
        return addUsuario;
    } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
        // Capturando o erro específico do MySQL
        if (error.code === 'ER_DUP_ENTRY') {
            return { success: false, message: 'Este usuário já existe.' };
        }
        return { success: false, message: 'Erro ao adicionar usuário' };
    }
}


module.exports = {
    getUsuario,
    getAll,
    addUsuario
}
