const path = require('path');
const reservaM = require('../models/reservaM');

module.exports = {
  // Renderiza a tela de reserva
  renderTelaReserva: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/telaReserva.html'));
  },

  // Processa o formulário de reserva
  processaReserva: (req, res) => {
    const { nome, email, qtdPessoas, dataReserva } = req.body;

    // Validação básica
    if (!nome || !email || !qtdPessoas || !dataReserva) {
      return res.status(400).send('Todos os campos são obrigatórios!');
    }

    // Salva a reserva no "banco de dados"
    reservaM.salvarReserva({ nome, email, qtdPessoas, dataReserva });

    console.log(`Reserva realizada por ${nome} para ${qtdPessoas} pessoas em ${dataReserva}.`);

    // Retorna uma mensagem de confirmação
    res.send(`<h1>Reserva confirmada!</h1><p>Obrigado, ${nome}. Sua reserva para ${qtdPessoas} pessoas foi agendada para ${dataReserva}.</p>`);
  },
};


