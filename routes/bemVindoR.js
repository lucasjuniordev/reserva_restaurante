
const express = require('express');
const bemVindoC = require('../controllers/bemVindoC'); 

const router = express.Router();

router.get('/', bemVindoC.renderTelaBemVindo); 

module.exports = router; // Exporta as rotas



