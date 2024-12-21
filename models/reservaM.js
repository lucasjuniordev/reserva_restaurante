// Simulando um banco de dados
const reservas = [];

module.exports = {
  salvarReserva: (reserva) => {
    reservas.push(reserva);
  },

  obterReservas: () => {
    return reservas;
  },
};

