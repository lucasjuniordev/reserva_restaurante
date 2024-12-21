
const path = require('path');

// Simulando um banco de dados (pode ser substituído por um real)
const usuarios = [];

module.exports = {
  // Renderiza a tela de cadastro
  renderTelaCadastro: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/telaCadastro.html'));
  },

  // Lida com os dados enviados no formulário
  processaCadastro: (req, res) => {
    const { nome, email, senha } = req.body;

    // Validação básica (melhorar conforme necessário)
    if (!nome || !email || !senha) {
      return res.status(400).send('Todos os campos são obrigatórios!');
    }

    // Simula salvar no banco de dados
    usuarios.push({ nome, email, senha });
    console.log(`Cadastro de usuário: ${nome}, com email: ${email} e senha: ${senha}`);

    // Mensagem de sucesso após o cadastro
    res.send(`Cadastro realizado com sucesso! Bem-vindo, ${nome}!`);
  }
};


