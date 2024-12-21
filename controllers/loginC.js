
/*
const path = require('path');

module.exports = {
  // Renderiza a tela de login
  renderTelaLogin: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/telaLogin.html')); // Envia o arquivo HTML para o cliente
  },

  // Processa o formulário de login
    processarLogin: (req, res) => {
    const { email, senha } = req.body; // Pega os dados enviados pelo formulário
    console.log(`Login com email: ${email} e senha: ${senha}`);
    res.redirect('/inicio'); // Redireciona para  tela inicio 

  },
 


  // Renderiza a tela de recuperação de senha
  renderTelaRecuperacaoSenha: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/telaEsqueceuSenha.html')); // Envia o arquivo HTML para o cliente
  },

  // Processa a recuperação de senha
  processarRecuperacaoSenha: (req, res) => {
    const { email } = req.body; // Pega o email enviado pelo formulário
    console.log(`Solicitação de recuperação de senha para o email: ${email}`);

    // Aqui você pode implementar a lógica de recuperação de senha
    res.send('Instruções de recuperação de senha enviadas para o email informado.');
  },
};
*/

const path = require('path');
const Usuario = require('../models/usuario'); // Importa o modelo de usuário

module.exports = {
  // Renderiza a tela de login
  renderTelaLogin: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/telaLogin.html')); // Envia o arquivo HTML da tela de login
  },

  // Processa o formulário de login
  processarLogin: async (req, res) => {
    const { email, senha } = req.body; // Pega os dados enviados pelo formulário

    try {
      // Verifica se o usuário existe no banco de dados
      const usuario = await Usuario.findOne({ email });

      if (!usuario) {
        return res.status(401).json({ erro: 'Email ou senha inválidos.' });
      }

      // Compara a senha fornecida com a senha armazenada no banco de dados
      const senhaValida = await bcrypt.compare(senha, usuario.senha);

      if (!senhaValida) {
        return res.status(401).json({ erro: 'Email ou senha inválidos.' });
      }

      // Redireciona para a tela de início após login bem-sucedido
      res.redirect('/');
    } catch (err) {
      console.error(err);
      res.status(500).json({ erro: 'Houve um erro ao processar seu login.' });
    }
  },

  // Renderiza a tela de recuperação de senha
  renderTelaRecuperacaoSenha: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/telaEsqueceuSenha.html')); // Envia o arquivo HTML da tela de recuperação
  },

  // Processa a recuperação de senha
  processarRecuperacaoSenha: (req, res) => {
    const { email } = req.body; // Pega o email enviado pelo formulário
    console.log(`Solicitação de recuperação de senha para o email: ${email}`);

    // Aqui você pode implementar a lógica de recuperação de senha
    res.send('Instruções de recuperação de senha enviadas para o email informado.');
  },
};

