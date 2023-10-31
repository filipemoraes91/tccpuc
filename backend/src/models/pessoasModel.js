const connection = require('./conection');
const getAll = async () => {
    const pessoas = await connection.execute(
        'SELECT * FROM PESSOAS'
    );
    return pessoas;
}
const addPessoa = async(pessoa) => {
    const {nom_pess, cpfcnpj_pess, email_pess, senha_pess, cod_pfl} = pessoa;
    const qry = 'INSERT INTO PESSOAS (nom_pess, cpfcnpj_pess, email_pess, senha_pess, cod_pfl) values (?, ?, ?, ?, ?)';
    const addPessoa =  await connection.execute(qry,[nom_pess, cpfcnpj_pess, email_pess, senha_pess, cod_pfl]);
    return addPessoa;
}

module.exports ={
    getAll,
    addPessoa
}
