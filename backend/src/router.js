const express = require('express');
const auth = require('./auth');
const usuarioController = require('./controllers/usuarioController');
const pessoasContrl = require('./controllers/pessoasController');
const enderecoContrl = require('./controllers/enderecoController');
const produtosContrl = require('./controllers/produtosController');
const carrinhoContrl = require('./controllers/carrinhoController');


const router = express.Router();

router.get('/pessoas', pessoasContrl.getAll);
router.post('/pessoas', pessoasContrl.addPessoa);

router.get('/carrinho', carrinhoContrl.getAll);
router.get('/carrinhoqtde', carrinhoContrl.getQtdeItens);
router.post('/carrinho', carrinhoContrl.addItensCarrinho);
router.delete('/carrinho', carrinhoContrl.removeItensCarrinho);

router.get('/endereco', enderecoContrl.getAll);
router.post('/endereco', enderecoContrl.addEndereco);

router.get('/produtos', produtosContrl.getAll);
router.post('/produtos', produtosContrl.addProduto);
router.get('/produtos/editar/:id', produtosContrl.getProduto);
router.put('/produtos/editar/:id', produtosContrl.putProduto);

router.post('/login', usuarioController.login);

// Rota protegida (exemplo)
router.get('/recurso-protegido', auth.verifyToken, (req, res) => {
  res.json({ message: 'Rota protegida, apenas usuários autenticados podem acessar.' });
});


module.exports = router;