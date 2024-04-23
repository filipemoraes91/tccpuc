const connection = require('./conection');

const getAll = async () => {
    const usuarios = await connection.execute(
        'SELECT * FROM usuarios'
    );
    return usuarios;
}

async function getUsuario(id) {
    const qry = 'SELECT * FROM usuarios WHERE ID = ?';
    const usuario = await connection.execute(qry, [id]);
    return usuario[0];
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

const putUsuario = async (usuario) => {
    const { ID, Nome, Email, Senha, Rua, Numero, CEP, Cidade, Estado } = usuario;
    const qry = 'UPDATE usuarios SET Nome = ?, Email = ?, Senha = ?, Rua = ?, Numero = ?, CEP = ?, Cidade = ?, Estado = ? WHERE ID = ?';
    const putUsuario = await connection.execute(qry, [ID, Nome, Email, Senha, Rua, Numero, CEP, Cidade, Estado]);
    return putUsuario;
};


module.exports = {
    getUsuario,
    getAll,
    addUsuario,
    putUsuario
}
