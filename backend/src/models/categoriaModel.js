const connection = require('./conection');

const addCategoria = async (categoria) => {
    const { Nome, ID } = categoria;
    const qry = 'INSERT INTO categoria (Nome, ID) VALUES (?, ?)';
    const addCateg = await connection.execute(qry, [Nome, ID]);
    return addCateg;
}


const putCategoria = async (categoria) => {
    const { Nome,  ID } = categoria;
    const qry = 'UPDATE categoria SET Nome = ? WHERE ID = ?';
    const putCategoria = await connection.execute(qry, [Nome, ID]);
    return putCategoria;
};

const getAll = async () => {
    const categoria = await connection.execute(
        'SELECT * FROM categoria'
    );
    return categoria;
}

const getCategoria = async (id) => {
    const qry = 'SELECT * FROM categoria WHERE ID = ?';
    const categoria = await connection.execute(qry, [id]);
    return categoria[0];
}

const deleteCategoria = async (id) => {
    const qry = 'DELETE FROM categoria WHERE ID=?';
    const deleteCategoria = await connection.execute(qry, [id]);
    return deleteCategoria;
};

module.exports = {
    getAll,
    getCategoria,
    addCategoria,
    putCategoria,
    deleteCategoria
}
