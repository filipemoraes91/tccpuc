const express = require('express');
const auth = require('./auth');
const authControl = require('./controllers/authController');
const usuarioController = require('./controllers/usuarioController');
const enderecoContrl = require('./controllers/enderecoController');
const produtosContrl = require('./controllers/produtosController');
const perfilContrl = require('./controllers/perfilController');
const pedidoContrl = require('./controllers/pedidoController');
const categoriaContrl = require('./controllers/categoriaController');
const carrinhoContrl = require('./controllers/carrinhoController');
const favoritosContrl = require('./controllers/favoritosController');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Servidor online! banco:'});
});

router.post('/login', authControl.getAuth);
router.get('/enderecos/:id', enderecoContrl.getAll);
router.get('/endereco/:id/:idEnd', enderecoContrl.getEndereco);
router.put('/endereco/:id/:idEnd', enderecoContrl.putEndereco);
router.post('/endereco', enderecoContrl.addEndereco);
router.delete('/endereco/delete/:id', enderecoContrl.deleteEndereco);

router.get('/carrinho', carrinhoContrl.getAll);
router.get('/carrinhoqtde', carrinhoContrl.getQtdeItens);
router.post('/carrinho', carrinhoContrl.addItensCarrinho);
router.delete('/carrinho/:id', carrinhoContrl.removeItensCarrinho);

router.get('/favoritos', favoritosContrl.getAll);
router.post('/favoritos', favoritosContrl.addFavorito);
router.delete('/favoritos/:id', favoritosContrl.removeFavorito);

router.get('/produtos', produtosContrl.getAll);
router.get('/produtos/:id', produtosContrl.getProduto);
router.post('/produtos/novo', produtosContrl.addProduto);
router.put('/produtos/editar/:id', produtosContrl.putProduto);
router.delete('/produtos/delete/:id', produtosContrl.deleteProduto);

router.get('/pedidos', pedidoContrl.getAll);
router.get('/pedido/:id', pedidoContrl.getPedido);
router.get('/meuspedidos/:id', pedidoContrl.getPedidos);
router.post('/pedido/novo', pedidoContrl.addPedido);

router.get('/perfil', perfilContrl.getAll);
router.get('/perfil/:id', perfilContrl.getPerfil);
router.post('/perfil/novo', perfilContrl.addPerfil);
router.put('/perfil/editar/:id', perfilContrl.putPerfil);
router.delete('/perfil/delete/:id', perfilContrl.deletePerfil);

router.get('/categoria', categoriaContrl.getAll);
router.get('/categoria/:id', categoriaContrl.getCategoria);
router.post('/categoria/novo', categoriaContrl.addCategoria);
router.put('/categoria/editar/:id', categoriaContrl.putCategoria);
router.delete('/categoria/delete/:id', categoriaContrl.deleteCategoria);

router.get('/usuarios', usuarioController.getAll);
router.get('/usuarios/:id', usuarioController.getUsuario);
router.put('/usuario/:id', usuarioController.putUsuario);
router.put('/usuarioDados/:id', usuarioController.putDadosUsuario);
router.post('/usuario/novo', usuarioController.addUsuario);

// Rota protegida (exemplo)
router.get('/recurso-protegido', auth.verifyToken, (req, res) => {
  res.json({ message: 'Para acessar este recuso efetue o login!' });
});


module.exports = router;
