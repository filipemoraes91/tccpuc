const connection = require('./conection');
const getAll = async () => {
    const usuarios = await connection.execute(
        'SELECT * FROM USUARIOS'
    );
    return usuarios;
}
const addUsuario = async(usuarios) => {
    const {login_usu, senha_usu, cod_pfl, cod_pess} = usuarios;
    const qry = 'INSERT INTO USUARIOS (login_usu, senha_usu, cod_pfl, cod_pess) values (?, ?, ?, ?)';
    const addUsuario =  await connection.execute(qry,[login_usu, senha_usu, cod_pfl, cod_pess]);
    return addUsuario;
}

module.exports ={
    getAll,
    addUsuario
}
