
const express = require('express');
const cadastroC = require('../controllers/cadastroC'); 

const router = express.Router();

// Rota para exibir a tela de cadastro
router.get('/', cadastroC.renderTelaCadastro);

// Rota para processar o formulário de cadastro
router.post('/', cadastroC.processaCadastro);

module.exports = router;


