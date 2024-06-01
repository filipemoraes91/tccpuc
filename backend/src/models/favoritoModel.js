const connection = require('./conection');
const getAll = async () => {
    const favoritos = await connection.execute(
        'SELECT * FROM favoritos ' +
        'INNER JOIN produtos ON favoritos.ProdutoID = produtos.ID ' +
        'INNER JOIN usuarios ON usuarios.ID = favoritos.USUARIOID '
    );
    return favoritos;
}

const addFavorito = async (item) => {
    const { usuarioID, produtoID } = item;
    const qry = 'INSERT INTO favoritos (usuarioID, produtoID) values (?,?)';
    const addFavorito = await connection.execute(qry, [usuarioID, produtoID]);
    return addFavorito;
}


const removeFavorito = async (id) => {
    const qry = 'DELETE FROM favoritos WHERE ProdutoID = ?';
    const removeFavorito = await connection.execute(qry, [id]);
    return removeFavorito;
}

module.exports = {
    getAll,
    addFavorito,
    removeFavorito
}
