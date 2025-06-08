const express = require('express');
const path = require('path');
const { quizQuestions, personagens } = require('./quizData');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Quiz Normal
app.get('/quiz', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'quiz.html'));
});

// Adivinhe o Personagem
app.get('/personagem', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'personagem.html'));
});

// API para perguntas
app.get('/api/perguntas', (req, res) => {
  res.json(quizQuestions);
});

// API para personagens
app.get('/api/personagens', (req, res) => {
  res.json(personagens);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});