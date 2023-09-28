const connection = require('./conection');
const getAll = async () => {
    const pessoas = await connection.execute(
        'SELECT * FROM PESSOAS'
    );
    return pessoas;
}
const addPessoa = async(pessoa) => {
    const {nome, cpfcnpj, endereco, num, cidade, estado, telefone} = pessoa;
    const qry = 'INSERT INTO PESSOAS (nome, cpfcnpj, endereco, num, cidade, estado, telefone) values (?, ?, ?, ?, ?, ?, ?)';
    const addPessoa =  await connection.execute(qry,[nome, cpfcnpj, endereco, num, cidade, estado, telefone]);
    return addPessoa;
}

module.exports ={
    getAll,
    addPessoa
}
