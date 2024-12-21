
const express = require('express');
const reservaC = require('../controllers/reservaC');

const router = express.Router();

// Rota para exibir a tela de reserva
router.get('/', reservaC.renderTelaReserva);

// Rota para processar o formulário de reserva
router.post('/', reservaC.processaReserva);


module.exports = router;

