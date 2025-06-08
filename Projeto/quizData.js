const quizQuestions = [
  {
    question: "Qual é o nome completo do protagonista?",
    options: ["Ippo Makunouchi", "Takamura Mamoru", "Ichiro Miyata", "Ryo Mashiba"],
    answer: "Ippo Makunouchi"
  },
  {
    question: "Quem é o treinador de Ippo?",
    options: ["Genji Kamogawa", "Takamura Mamoru", "Date Eiji", "Sendou Takeshi"],
    answer: "Genji Kamogawa"
  },
  {
    question: "Qual é o golpe especial do Ippo?",
    options: ["Dempsey Roll", "Gatling Punch", "Dragon Fish Blow", "Gazelle Punch"],
    answer: "Dempsey Roll"
  }
];

const personagens = [
  {
    nome: "Ippo Makunouchi", nome: "Ippo",
    imagem: "/personagens/ippo.jpg",
    dica: "Protagonista tímido e trabalhador."
  },
  {
    nome: "Takamura Mamoru", nome: "Takamura",
    imagem: "/personagens/takamura.png",
    dica: "Campeão mundial e mentor engraçado."
  }
  // se eu quiser eu adiciono mais personagens depois
];

module.exports = { quizQuestions, personagens };