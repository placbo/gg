// @ts-nocheck
const data = [
  {
    question: "Hvem er dette?",
    img: "q1.jpg",
    q1: "Olav",
    q2: "Olaf",
    q3: "Husker ikke",
    q4: "Hvem?",
    correct: 1,
  },
  {
    question: "Hva heter denne fargen?",
    img: "q2.jpg",
    q1: "Gül",
    q2: "Gyl",
    q3: "Gul",
    q4: "Gøl",
    correct: 3,
  },
  {
    question: "Når har denne kjekkasen bursdag?",
    img: "q3.jpg",
    q1: "6. jan",
    q2: "17. mai",
    q3: "7. jan",
    q4: "8. jan",
    correct: 3,
  },
  {
    question: "Hva må en ekte normann ha?",
    img: "q4.jpg",
    q1: "Drill",
    q2: "Hytte",
    q3: "Ski",
    q4: "Alt sammen, så klart",
    correct: 4,
  },
];

let currentQuestion = 0;

function populatePage() {
  document.getElementById("question").textContent =
    data[currentQuestion].question;
  document.getElementById("q-image").src = "media/" + data[currentQuestion].img;
  document.getElementById("q1").textContent = data[currentQuestion].q1;
  document.getElementById("q2").textContent = data[currentQuestion].q2;
  document.getElementById("q3").textContent = data[currentQuestion].q3;
  document.getElementById("q4").textContent = data[currentQuestion].q4;
  document.getElementById("q1").style.backgroundColor = "#0542b9";
  document.getElementById("q2").style.backgroundColor = "#c60929";
  document.getElementById("q3").style.backgroundColor = "#d89e00";
  document.getElementById("q4").style.backgroundColor = "#106b03";
}

function checkAnswer(choice) {
  if (choice === data[currentQuestion].correct) {
    document.getElementById("nextPageButton").style.display = "block";
    document.getElementById("q-image").style.display = "none";

    document.getElementById("q" + choice).style.backgroundColor = "green";
    document.getElementById("q" + choice).textContent = "✔️";
  } else {
    document.getElementById("q" + choice).style.backgroundColor = "red";
    document.getElementById("q" + choice).textContent = "❌";
  }
}

function goToNextQuestion() {
  document.getElementById("nextPageButton").style.display = "none";
  document.getElementById("q-image").style.display = "block";

  currentQuestion++;
  console.log(currentQuestion);
  if (currentQuestion >= data.length) {
    window.location.href = "quiz_end.html";
  }
  populatePage();
}

populatePage();
