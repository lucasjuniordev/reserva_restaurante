const express = require('express');
const inicioC = require('../controllers/inicioC'); 

const router = express.Router();

// Rota para exibir a tela de inicio
router.get('/', inicioC.renderTelaInicio);

// Exporta as rotas
module.exports = router;

