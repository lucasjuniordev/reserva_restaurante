
const mongoose = require('mongoose');

// Conectar ao banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/seuBancoDeDados', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB', err));


