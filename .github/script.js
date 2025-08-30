const questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Transfer Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    choices: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript framework?",
    choices: ["Python Script", "JQuery", "Django", "NodeJS"],
    answer: "Django"
  },
  {
    question: "Which is used for web apps?",
    choices: ["PHP", "Python", "JavaScript", "All"],
    answer: "All"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";
  q.choices.forEach(choice => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.onclick = () => checkAnswer(choice);
    choicesEl.appendChild(li);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) score++;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultEl.classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  loadQuestion();
}

loadQuestion();