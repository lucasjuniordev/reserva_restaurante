const path = require('path');

module.exports = {
  // Renderiza a tela de início
  renderTelaInicio: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/telaInicio.html')); 
  },
};

