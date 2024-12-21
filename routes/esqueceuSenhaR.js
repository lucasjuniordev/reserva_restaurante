
// routes/esqueceuSenhaR.js
const express = require('express');
const esqueceuSenhaC = require('../controllers/esqueceuSenhaC');

const router = express.Router();

// Rota para exibir a tela de recuperação de senha
router.get('/', esqueceuSenhaC.renderTelaEsqueceuSenha);

// Rota para processar o formulário de recuperação de senha
router.post('/recuperar-senha', esqueceuSenhaC.processarRecuperacaoSenha);

module.exports = router;



