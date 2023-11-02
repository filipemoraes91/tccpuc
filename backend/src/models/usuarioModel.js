const db = require('./conection');
// const getAll = async () => {
//     const pessoas = await db.execute(
//         'SELECT * FROM PESSOAS'
//     );
//     return pessoas;
// }
// const addPessoa = async (pessoa) => {
//     const { nom_pess, cpfcnpj_pess, email_pess, senha_pess, cod_pfl } = pessoa;
//     const qry = 'INSERT INTO PESSOAS (nom_pess, cpfcnpj_pess, email_pess, senha_pess, cod_pfl) values (?, ?, ?, ?, ?)';
//     const addPessoa = await db.execute(qry, [nom_pess, cpfcnpj_pess, email_pess, senha_pess, cod_pfl]);
//     return addPessoa;
// }

async function getUsuario(email, senha) {
    const query = 'SELECT nome, email, id FROM usuarios WHERE email = ? AND senha = ?';
    const usuario = await db.execute(query,[email, senha]);
    return usuario;
    // console.log(query)
    // db.query(query, [email, senha], (err, results) => {        
    //     if (err) {
    //         console.error('Erro na consulta: ' + err);
    //         return res.status(500).json({ mensagem: 'Erro interno' });
    //     }

    //     if (results.length === 1) {
    //         return res.json({ mensagem: 'Login bem-sucedido' });
    //     } else {
    //         return res.status(401).json({ mensagem: 'Credenciais inválidas' });
    //     }
    // });

}

module.exports = {
            // getAll,
            // addPessoa,
            getUsuario
        }
