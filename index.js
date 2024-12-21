

const express = require('express');
const bemVindoR = require('./routes/bemVindoR'); // Importa as rotas de bem-vindo
const loginR = require('./routes/loginR'); 
const cadastroR = require('./routes/cadastroR'); 
const esqueceuSenhaR = require('./routes/esqueceuSenhaR');
const reservaR = require('./routes/reservaR');
const inicioR = require('./routes/inicioR'); // Importa as rotas da tela de início

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public'));

// Registra as rotas das telas
app.use('/bem-vindo', bemVindoR); 
app.use('/login', loginR);
app.use('/cadastro', cadastroR);
app.use('/esqueceu-senha', esqueceuSenhaR);
app.use('/reserva', reservaR);
app.use('/inicio', inicioR); 

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});




