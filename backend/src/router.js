const express = require('express');
const pessoasContrl = require('./controllers/pessoasController');

const router = express.Router();

router.get('/pessoas', pessoasContrl.getAll);
router.post('/pessoas', pessoasContrl.addPessoa);

module.exports = router;