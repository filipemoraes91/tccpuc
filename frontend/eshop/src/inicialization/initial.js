import { getInfUser } from "../utils"

export let iniPessoa = {
    cod_pess: 0,
    nom_pess: '',
    cpfcnpj_pess: '',
    email_pess: '',
    senha_pess: '',
    cod_pfl: '1'
}

export let iniUser = {
    nome: '',
    email: '',
    senha: '',
}

export let iniProdutos = {
    ID: 0,
    Nome: '',
    Descricao: '',
    Preco: 0,
    Estoque: 0
}

export let iniEndereco = {
    UsuarioID: getInfUser() ? getInfUser().id : 0,
    Rua: '',
    Numero: 0,
    UF: '',
    Cidade: '',
    CEP: '',
    Complemento: ''
}