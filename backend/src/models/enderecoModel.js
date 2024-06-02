const connection = require('./conection');

const addEndereco = async (endereco) => {
    const { UsuarioID, Estado, Cidade, Bairro,  Rua, Numero, Complemento, CEP, Descricao } = endereco;
    const qry = 'INSERT INTO enderecos (UsuarioID, Estado, Cidade, Bairro,  Rua, Numero, Complemento, CEP, Descricao) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const addEndereco = await connection.execute(qry, [UsuarioID, Estado, Cidade, Bairro,  Rua, Numero, Complemento, CEP, Descricao]);
    return addEndereco;
}

const putEndereco = async (endereco) => {
    try {
        const { Estado, Cidade, Bairro, Rua, Numero, CEP, Complemento, Descricao, ID } = endereco;
        const qry = 'UPDATE enderecos SET Estado = ? , Cidade = ? , Bairro = ?,  Rua = ? , Numero = ?, CEP = ? , Complemento = ? , Descricao = ?  WHERE ID = ?';
        const putEndereco = await connection.execute(qry, [Estado, Cidade, Bairro, Rua, Numero, CEP, Complemento, Descricao, ID]);
        return putEndereco;
    } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
        // Capturando o erro específico do MySQL
        if (error.code === 'ER_DUP_ENTRY') {
            return { success: false, message: 'Este cadastro já existe.' };
        }
        return { success: false, message: 'Erro ao adicionar endereco' };
    }
};

const getAll = async (id) => {
    const qry = 'SELECT * FROM enderecos WHERE UsuarioID = ?';
    const endereco = await connection.execute(qry, [id]);
    return endereco;
}

const getEndereco = async (id) => {
    const qry = 'SELECT * FROM enderecos WHERE ID = ?';
    const endereco = await connection.execute(qry, [id]);
    return endereco[0];
}

const deleteEndereco = async (id) => {
    const qry = 'DELETE FROM enderecos WHERE ID=?';
    const deleteEndereco = await connection.execute(qry, [id]);
    return deleteEndereco;
};

module.exports = {
    getAll,
    getEndereco,
    addEndereco,
    putEndereco,
    deleteEndereco
}
