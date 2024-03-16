const connection = require('./conection');

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

async function getUsuario(user) {
    const { Email, Senha } = user;
    const query = 'SELECT Nome, Email, ID FROM usuarios WHERE Email = ? AND Senha = ?';
    const usuario = await connection.execute(query, [Email, Senha]);
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

const addUsuario = async (usuario) => {
    try {
        const { Nome, Email, Senha, PerfilID } = usuario;
        console.log(Nome)
        const qry = 'INSERT INTO usuarios (Nome, Email, Senha, PerfilID) VALUES (?, ?, ?, ?)';
        const addUsuario = await connection.execute(qry, [Nome, Email, Senha, PerfilID]);
        return addUsuario;
    } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
        // Capturando o erro específico do MySQL
        if (error.code === 'ER_DUP_ENTRY') {
            return { success: false, message: 'Este usuário já existe.' };
        }
        return { success: false, message: 'Erro ao adicionar usuário' };
    }
}


module.exports = {
    getUsuario,
    addUsuario
}
