
// controllers/esqueceuSenhaC.js
const path = require('path');

module.exports = {
  // Renderizar a tela de recuperação de senha
  renderTelaEsqueceuSenha: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/telaEsqueceuSenha.html'));
  },

  // Processar o formulário de recuperação de senha
  processarRecuperacaoSenha: (req, res) => {
    const { email } = req.body;
    console.log(`Recuperação de senha solicitada para o email: ${email}`);


   res.send(`Instruções de recuperação de senha enviadas para ${email}`);
  },
};

