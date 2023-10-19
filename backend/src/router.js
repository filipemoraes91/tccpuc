const express = require('express');
const pessoasContrl = require('./controllers/pessoasController');
const usuariosContrl = require('./controllers/usuariosController');

const router = express.Router();

router.get('/pessoas', pessoasContrl.getAll);
router.post('/pessoas', pessoasContrl.addPessoa);
router.get('/usuarios', usuariosContrl.getAll);
router.post('/usuarios', usuariosContrl.addUsuario);

module.exports = router;