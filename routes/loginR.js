/*

const express = require('express');
const loginC = require('../controllers/loginC'); // Importa o controlador loginC

const router = express.Router();

// Rota para exibir a tela de login
router.get('/', loginC.renderTelaLogin); // Rota GET para a tela de login

// Rota para processamento do login
router.post('/login', loginC.processarLogin); // Rota POST para processar o login

// Rota para exibir a tela de recuperação de senha
router.get('/esqueceu-senha', loginC.renderTelaRecuperacaoSenha);

// Rota para processar a recuperação de senha
router.post('/recuperar-senha', loginC.processarRecuperacaoSenha);

module.exports = router; // Exporta as rotas
*/

const express = require('express');
const loginC = require('../controllers/loginC'); // Importa o controlador loginC

const router = express.Router();

// Rota para exibir a tela de login
router.get('/', loginC.renderTelaLogin); // Rota GET para a tela de login

// Rota para processamento do login
router.post('/login', loginC.processarLogin); // Rota POST para processar o login

// Rota para exibir a tela de recuperação de senha
router.get('/esqueceu-senha', loginC.renderTelaRecuperacaoSenha);

// Rota para processar a recuperação de senha
router.post('/recuperar-senha', loginC.processarRecuperacaoSenha);

module.exports = router; // Exporta as rotas

