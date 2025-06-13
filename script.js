const questions = [
  {
    text: 'Qual é a capital do Brasil?',
    options: ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Belo Horizonte'],
    answer: 1
  },
  {
    text: 'Quanto é 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: 1
  },
  {
    text: 'Em qual continente fica Portugal?',
    options: ['África', 'América', 'Europa', 'Ásia'],
    answer: 2
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next-btn');

function showQuestion() {
  const q = questions[current];
  questionEl.textContent = q.text;
  answersEl.innerHTML = '';
  q.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => chooseAnswer(index);
    answersEl.appendChild(btn);
  });
  nextBtn.style.display = 'none';
}

function chooseAnswer(index) {
  if (index === questions[current].answer) {
    score++;
  }
  nextBtn.style.display = 'block';
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    questionEl.textContent = `Fim! Você acertou ${score} de ${questions.length}.`;
    answersEl.innerHTML = '';
    nextBtn.style.display = 'none';
  }
}

nextBtn.addEventListener('click', nextQuestion);

showQuestion();
