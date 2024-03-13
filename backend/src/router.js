const express = require('express');
const auth = require('./auth');
const usuarioController = require('./controllers/usuarioController');
const pessoasContrl = require('./controllers/pessoasController');
const enderecoContrl = require('./controllers/enderecoController');
const produtosContrl = require('./controllers/produtosController');
const carrinhoContrl = require('./controllers/carrinhoController');
const favoritosContrl = require('./controllers/favoritosController');


const router = express.Router();

router.get('/pessoas', pessoasContrl.getAll);
router.post('/pessoas', pessoasContrl.addPessoa);

router.get('/carrinho', carrinhoContrl.getAll);
router.get('/carrinhoqtde', carrinhoContrl.getQtdeItens);
router.post('/carrinho', carrinhoContrl.addItensCarrinho);
router.delete('/carrinho/:id', carrinhoContrl.removeItensCarrinho);

router.get('/favoritos', favoritosContrl.getAll);
router.post('/favoritos', favoritosContrl.addFavorito);
router.delete('/favoritos/:id', favoritosContrl.removeFavorito);

router.get('/endereco', enderecoContrl.getAll);
router.post('/endereco', enderecoContrl.addEndereco);

router.get('/produtos', produtosContrl.getAll);
router.get('/produtos/:id', produtosContrl.getProduto);
router.post('/produtos/novo', produtosContrl.addProduto);
router.put('/produtos/editar/:id', produtosContrl.putProduto);
router.delete('/produtos/delete/:id', produtosContrl.deleteProduto);

router.post('/login', usuarioController.login);

// Rota protegida (exemplo)
router.get('/recurso-protegido', auth.verifyToken, (req, res) => {
  res.json({ message: 'Para acessar este recuso efetue o login!' });
});


module.exports = router;