const mongoose = require('mongoose');

// Definir o esquema do usuário
const usuarioSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true }
});

// Criar e exportar o modelo de usuário
module.exports = mongoose.model('Usuario', usuarioSchema);

