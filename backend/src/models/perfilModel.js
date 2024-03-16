const connection = require('./conection');

const addPerfil = async (perfil) => {
    const { Nome, Perm } = perfil;
    const qry = 'INSERT INTO perfil (Nome, Perm) VALUES (?, ?)';
    const addPerm = await connection.execute(qry, [Nome, Perm]);
    return addPerm;
}


const putPerfil = async (perfil) => {
    const { Nome, Perm, ID } = perfil;
    const qry = 'UPDATE perfil SET Nome = ?, Perm = ? WHERE ID = ?';
    const putPerfil = await connection.execute(qry, [Nome, Perm, ID]);
    return putPerfil;
};

const getAll = async () => {
    const perfil = await connection.execute(
        'SELECT * FROM perfil'
    );
    return perfil;
}

const getPerfil = async (id) => {
    const qry = 'SELECT * FROM perfil WHERE ID = ?';
    const perfil = await connection.execute(qry, [id]);
    return perfil[0];
}

const deletePerfil = async (id) => {
    const qry = 'DELETE FROM perfil WHERE ID=?';
    const deletePerfil = await connection.execute(qry, [id]);
    return deletePerfil;
};

module.exports = {
    getAll,
    getPerfil,
    addPerfil,
    putPerfil,
    deletePerfil
}
