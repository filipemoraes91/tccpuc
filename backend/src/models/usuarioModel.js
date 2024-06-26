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
        const { CPF, Nome, Email, Senha, Telefone, PerfilID } = usuario;
        const qry = 'INSERT INTO usuarios (CPF, Nome, Email, Senha, Telefone, PerfilID) VALUES (?, ?, ?, ?, ?, ?)';
        const addUsuario = await connection.execute(qry, [CPF, Nome, Email, Senha, Telefone, PerfilID]);
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
    const { ID, PerfilID } = usuario;
    const qry = 'UPDATE usuarios SET PerfilID = ? WHERE ID = ?';
    const putUsuario = await connection.execute(qry, [PerfilID, ID]);
    return putUsuario;
}
    ;
const putDadosUsuario = async (usuario) => {
    const { ID, Nome, Email, Senha, CPF, Telefone } = usuario;
    const qry = 'UPDATE usuarios SET Nome = ?, Email = ?, Senha = ?, CPF = ?, Telefone = ? WHERE ID = ?';
    console.log(qry);
    const putUsuario = await connection.execute(qry, [Nome, Email, Senha, CPF, Telefone, ID]);
    return putUsuario;
};


module.exports = {
    getUsuario,
    getAll,
    addUsuario,
    putUsuario,
    putDadosUsuario
}
