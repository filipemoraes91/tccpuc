const connection = require('./conection');

const addEntrega = async (entrega) => {
    const { UsuarioID, Estado, Cidade, Rua, Numero, Complemento, Descricao } = entrega;
    const qry = 'INSERT INTO entrega (UsuarioID, Estado, Cidade, Rua, Numero, Complemento, Descricao) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const addEntrega = await connection.execute(qry, [UsuarioID, Estado, Cidade, Rua, Numero, Complemento, Descricao]);
    return addEntrega;
}

const putEntrega = async (entrega) => {
    const { Estado, Cidade, Rua, Numero, Complemento, Descricao, ID } = entrega;
    const qry = 'UPDATE perfil SET Estado = ? , Cidade = ? , Rua = ? , Numero = ? , Complemento = ? , Descricao = ?  WHERE ID = ?';
    const putEntrega = await connection.execute(qry, [Estado, Cidade, Rua, Numero, Complemento, Descricao, ID]);
    return putEntrega;
};

const getAll = async () => {
    const entrega = await connection.execute(
        'SELECT * FROM entrega'
    );
    return perfil;
}

const getEntrega = async (id) => {
    const qry = 'SELECT * FROM entrega WHERE ID = ?';
    const entrega = await connection.execute(qry, [id]);
    return entrega[0];
}

const deleteEntrega = async (id) => {
    const qry = 'DELETE FROM entrega WHERE ID=?';
    const deleteEntrega = await connection.execute(qry, [id]);
    return deleteEntrega;
};

module.exports = {
    getAll,
    getEntrega,
    addEntrega,
    putEntrega,
    deleteEntrega
}
