const connection = require('./conection');
const getAll = async () => {
    const endereco = await connection.execute(
        'SELECT * FROM ENDERECO'
    );
    return endereco;
}

const addEndereco = async (endereco) => {
    const { UsuarioID, Rua, Numero, CEP, Cidade, UF, Complemento } = endereco;
    const qry = 'INSERT INTO ENDERECO (UsuarioID, Rua, Numero, CEP, Cidade, UF, Complemento) values (?, ?, ?, ?, ?, ?, ?)';
    const addEndereco = await connection.execute(qry, [UsuarioID, Rua, Numero, CEP, Cidade, UF, Complemento]);
    return addEndereco;
}

module.exports = {
    getAll,
    addEndereco
}
