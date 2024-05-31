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
    ConfirmarSenha: '',
    PerfilID: 0,
    CPF: ''
}

export const iniEndereco = {
    id: 0,
    UsuarioID: 0,
    Rua: '',
    Numero: 0,
    Estado: '',
    Cidade: '',
    CEP: '',
    Complemento: '',
    Descricao: ''
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

export const iniPedido = {
    DataPedido: new Date(),
    TotalPedido: 0,
    UsuarioID: 0,
    EntregaID: '',
    QtdeParcelas: 1,
    FormaPagto: 'boleto'
}