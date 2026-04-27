const questions = [
  {
    prompt: "When faced with a difficult decision, what matters most?",
    answers: [
      { text: "Doing what is right, even if it costs me personally.", scores: { raimi: 3, webb: 0, mcu: 1 } },
      { text: "Protecting the people I care about most.", scores: { raimi: 1, webb: 3, mcu: 0 } },
      { text: "Finding a solution that works with the people around me.", scores: { raimi: 0, webb: 1, mcu: 3 } }
    ]
  },
  {
    prompt: "How do you usually handle pressure?",
    answers: [
      { text: "I keep it inside and push through.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "I feel it deeply and let it affect me.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "I joke around, improvise, and keep moving.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "What kind of heroism feels most meaningful to you?",
    answers: [
      { text: "Quiet sacrifice and responsibility.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "Fighting for the people and emotions that define you.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "Learning how to help others while growing yourself.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "Your ideal partner dynamic is:",
    answers: [
      { text: "Complicated, emotional, and a little messy.", scores: { raimi: 3, webb: 1, mcu: 0 } },
      { text: "Deep, intense, and built on truly understanding each other.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "Playful, honest, and supportive as you both grow.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "How do you relate to authority or mentors?",
    answers: [
      { text: "I respect guidance, but I mostly carry the burden myself.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "I question authority and need to figure things out my own way.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "I learn from mentors and teams, even if I eventually need independence.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "What tone best matches your personality?",
    answers: [
      { text: "Earnest, serious, and sincere.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "Intense, emotional, and sarcastic.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "Light, funny, and energetic.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "What makes someone “Spider-Man”?",
    answers: [
      { text: "Accepting responsibility even when life is unfair.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "Staying true to yourself through love, loss, and confusion.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "Growing into responsibility while connected to a bigger world.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "How do you respond after making a mistake?",
    answers: [
      { text: "I feel responsible and try to make it right, even alone.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "I take it personally and struggle with the emotional fallout.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "I learn from it, ask for help, and try again.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "What role do relationships play in your identity?",
    answers: [
      { text: "They matter, but duty often comes first.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "They are central to who I am.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "They help me grow and find where I belong.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "Which phrase best describes your version of Spider-Man?",
    answers: [
      { text: "“With great power comes great responsibility.”", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "“I am still figuring out who I am.”", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "“I do not have to do this alone.”", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  }
];

const spiderProfiles = {
  raimi: {
    name: "Raimi / Tobey Maguire Spider-Man",
    subtitle: "Duty, sacrifice, responsibility, and sincerity",
    image: "images/tobey.jpg",
    tag: "Classic Hero",
    description: "You align most with the Raimi/Tobey version of Spider-Man. Duty, sacrifice, responsibility, and sincerity matter most in the way you approach life. This result highlights a classic superhero interpretation built around moral seriousness and doing the right thing even when it costs you personally."
  },
  webb: {
    name: "Webb / Andrew Garfield Spider-Man",
    subtitle: "Emotion, individuality, romance, and identity",
    image: "images/andrew.jpg",
    tag: "Emotional Hero",
    description: "You align most with the Webb/Andrew version of Spider-Man. Emotion, individuality, romance, and identity sit at the center of this result. This interpretation treats Spider-Man as a more personal and expressive figure shaped by feeling, relationships, and the struggle to define the self."
  },
  mcu: {
    name: "MCU / Tom Holland Spider-Man",
    subtitle: "Humor, youth, mentorship, collaboration, and growth",
    image: "images/tom.jpg",
    tag: "Collaborative Hero",
    description: "You align most with the MCU/Tom Holland version of Spider-Man. Humor, youth, mentorship, collaboration, and growth define this result. It reflects a version of Spider-Man shaped by learning through community and by existing inside a larger franchise world."
  }
};

const introScreen = document.getElementById("intro-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");
const startButton = document.getElementById("start-button");
const questionText = document.getElementById("question");
const progressText = document.getElementById("progress");
const answersBox = document.getElementById("answers");
const resultName = document.getElementById("result-name");
const resultSubtitle = document.getElementById("result-subtitle");
const resultTag = document.getElementById("result-tag");
const resultDescription = document.getElementById("result-description");
const resultScores = document.getElementById("result-scores");
const resultImg = document.getElementById("result-img");
const homeButton = document.getElementById("home-button");
const retakeButton = document.getElementById("retake-button");

let currentQuestion = 0;
let scores = { raimi: 0, webb: 0, mcu: 0 };

function showScreen(screen) {
  introScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  resultsScreen.classList.remove("active");
  screen.classList.add("active");
}

function resetQuiz() {
  currentQuestion = 0;
  scores = { raimi: 0, webb: 0, mcu: 0 };
}

function startQuiz() {
  resetQuiz();
  renderQuestion();
  showScreen(quizScreen);
}

// Show one question at a time.
function renderQuestion() {
  const question = questions[currentQuestion];
  progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  questionText.textContent = question.prompt;
  answersBox.innerHTML = "";

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = answer.text;
    button.addEventListener("click", () => selectAnswer(answer));
    answersBox.appendChild(button);
  });
}

function selectAnswer(answer) {
  scores.raimi += answer.scores.raimi || 0;
  scores.webb += answer.scores.webb || 0;
  scores.mcu += answer.scores.mcu || 0;
  currentQuestion += 1;

  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

function getWinner() {
  let winner = "raimi";

  if (scores.webb > scores[winner]) {
    winner = "webb";
  }

  if (scores.mcu > scores[winner]) {
    winner = "mcu";
  }

  return winner;
}

function showResults() {
  const resultKey = getWinner();
  const profile = spiderProfiles[resultKey];

  resultName.textContent = profile.name;
  resultSubtitle.textContent = profile.subtitle;
  resultTag.textContent = profile.tag;
  resultDescription.textContent = profile.description;
  resultScores.textContent = `Scores: Raimi ${scores.raimi} | Webb ${scores.webb} | MCU ${scores.mcu}`;
  resultImg.src = profile.image;
  resultImg.alt = profile.name;
  resultImg.style.display = "block";
  resultImg.onerror = () => {
    resultImg.style.display = "none";
  };

  showScreen(resultsScreen);
}

startButton.addEventListener("click", startQuiz);
retakeButton.addEventListener("click", startQuiz);
homeButton.addEventListener("click", () => showScreen(introScreen));
