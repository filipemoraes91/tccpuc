const express = require('express');
const auth = require('./auth');
const usuarioController = require('./controllers/usuarioController');
const pessoasContrl = require('./controllers/pessoasController');
const produtosContrl = require('./controllers/produtosController');


const router = express.Router();

router.get('/pessoas', pessoasContrl.getAll);
router.post('/pessoas', pessoasContrl.addPessoa);

router.get('/produtos', produtosContrl.getAll);
router.post('/produtos', produtosContrl.addProduto);

router.post('/login', usuarioController.login);

// Rota protegida (exemplo)
router.get('/recurso-protegido', auth.verifyToken, (req, res) => {
  res.json({ message: 'Rota protegida, apenas usuários autenticados podem acessar.' });
});


module.exports = router;