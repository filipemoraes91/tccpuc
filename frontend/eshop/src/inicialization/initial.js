import { getInfUser } from "../utils"

export const iniPessoa = {
    cod_pess: 0,
    nom_pess: '',
    cpfcnpj_pess: '',
    email_pess: '',
    senha_pess: '',
    cod_pfl: '1'
}

export const iniUser = {
    Nome: '',
    Email: '',
    Senha: '',
    PerfilID: 0
}

export const iniProdutos = {
    ID: 0,
    Nome: '',
    Descricao: '',
    Preco: 0.0,
    Estoque: 0.0,
    CategoriaID: 0,
    LinkImg: ''
}

export const iniEndereco = {
    UsuarioID: getInfUser() ? getInfUser().id : 0,
    Rua: '',
    Numero: 0,
    UF: '',
    Cidade: '',
    CEP: '',
    Complemento: ''
}