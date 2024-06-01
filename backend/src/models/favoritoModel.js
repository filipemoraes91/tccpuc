const connection = require('./conection');
const getAll = async () => {
    const favoritos = await connection.execute(
        'SELECT * FROM FAVORITOS ' +
        'INNER JOIN PRODUTOS ON FAVORITOS.ProdutoID = PRODUTOS.ID ' +
        'INNER JOIN USUARIOS ON USUARIOS.ID = FAVORITOS.USUARIOID '
    );
    return favoritos;
}

const addFavorito = async (item) => {
    const { usuarioID, produtoID } = item;
    const qry = 'INSERT INTO FAVORITOS (usuarioID, produtoID) values (?,?)';
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
