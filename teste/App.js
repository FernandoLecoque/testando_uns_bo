const express = require('express');
const app = express();
const connection = require('./db');

// Middleware pra JSON
app.use(express.json());

// Rota padrão (GET /)
app.get('/', (req, res) => {
  res.send('API de Cadastro funcionando! 🚀');
});

// Rota de cadastro
app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
  }

  const sql = 'INSERT INTO cadastro (nome, email, senha) VALUES (?, ?, ?)';
  connection.query(sql, [nome, email, senha], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ mensagem: 'Erro ao cadastrar usuário.' });
    }

    res.json({ mensagem: 'Usuário cadastrado com sucesso!' });
  });
});

module.exports = app; // exporta o app
