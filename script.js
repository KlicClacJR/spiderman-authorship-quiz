const questions = [
  {
    prompt: "When faced with a difficult decision, what usually matters most?",
    answers: [
      { text: "Doing what is right, even if it costs me personally.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "Protecting the people and emotions that define me.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "Finding a solution with help from the people around me.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "How should a hero handle pressure?",
    answers: [
      { text: "Carry the burden quietly and keep going.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "Let the emotional weight show honestly.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "Improvise, ask for help, and keep moving.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "What role should romance play in a Spider-Man adaptation?",
    answers: [
      { text: "Like Peter and Mary Jane, romance should be meaningful but complicated by duty.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "Like Peter and Gwen, romance should be central to identity, emotion, and tragedy.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "Like Peter and MJ, romance should grow through honesty, friendship, and shared change.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "How do you relate to mentors or authority figures?",
    answers: [
      { text: "I respect guidance, but I mostly carry responsibility alone.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "I question authority and need to define myself independently.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "I learn from mentors and teams, even while growing into independence.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "Which tone best fits your idea of Spider-Man?",
    answers: [
      { text: "Earnest, sincere, and morally serious.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "Intense, romantic, emotional, and a little rebellious.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "Funny, energetic, youthful, and self-aware.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "What makes someone Spider-Man?",
    answers: [
      { text: "Accepting responsibility even when life is unfair.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "Staying true to yourself through love, loss, and confusion.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "Growing into responsibility while connected to a bigger world.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "How should Spider-Man respond after making a mistake?",
    answers: [
      { text: "Feel responsible and try to make it right, even alone.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "Take it personally and struggle with the emotional fallout.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "Learn from it, ask for help, and try again.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "What kind of authorship feels most visible in a Spider-Man film?",
    answers: [
      { text: "A clear moral vision built around classic heroism.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "A strong emotional tone shaped by style and relationships.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "A collaborative franchise voice built across many connected stories.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "How independent should Spider-Man feel?",
    answers: [
      { text: "Mostly alone, because responsibility is personal.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "Independent and self-defining, even when it hurts.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "Connected to friends, mentors, and a larger world.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "What kind of conflict should drive the story?",
    answers: [
      { text: "The conflict between desire and moral obligation.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "The conflict between grief, love, and self-understanding.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "The conflict between growing up and meeting larger expectations.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "How should humor function in a Spider-Man film?",
    answers: [
      { text: "It should appear occasionally, but sincerity should lead.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "It should sharpen emotional tension and personality.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "It should be central to the character's youth and energy.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "What should loss teach Spider-Man?",
    answers: [
      { text: "Loss should deepen his sense of duty.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "Loss should shape his identity and emotional life.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "Loss should push him to grow into a more mature hero.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "What should the suit symbolize?",
    answers: [
      { text: "A responsibility that separates the hero from ordinary life.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "A personal identity built through emotion and self-expression.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "A tool for learning, experimenting, and becoming ready.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "How should Spider-Man relate to the city around him?",
    answers: [
      { text: "As a local protector whose duty is personal and constant.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "As an outsider trying to understand himself through the city.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "As one hero among many in a bigger connected world.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  },
  {
    prompt: "What does adaptation reveal about Spider-Man?",
    answers: [
      { text: "The same character can become a story about moral duty.", scores: { raimi: 3, webb: 0, mcu: 0 } },
      { text: "The same character can become a story about identity and feeling.", scores: { raimi: 0, webb: 3, mcu: 0 } },
      { text: "The same character can become a story about collaboration and systems.", scores: { raimi: 0, webb: 0, mcu: 3 } }
    ]
  }
];

const spiderProfiles = {
  raimi: {
    name: "Raimi / Tobey Maguire Spider-Man",
    subtitle: "Duty, sacrifice, responsibility, and sincerity",
    image: "images/tobey.jpg",
    tag: "Classic Hero",
    description:
      "You matched most closely with the Raimi/Tobey version of Spider-Man. This result points toward a strong sense of duty, personal sacrifice, and moral responsibility. You tend to value doing the right thing even when it comes with loneliness, difficulty, or emotional cost. This version of Spider-Man feels earnest and sincere, shaped by the burden of responsibility more than by style or spectacle. In interpretive terms, Raimi’s Spider-Man reflects a classic superhero framework built on moral clarity and the idea that heroism often requires private sacrifice."
  },
  webb: {
    name: "Webb / Andrew Garfield Spider-Man",
    subtitle: "Emotion, individuality, romance, and identity",
    image: "images/andrew.jpg",
    tag: "Emotional Hero",
    description:
      "You matched most closely with the Webb/Andrew version of Spider-Man. This result emphasizes feeling, individuality, romance, and the ongoing struggle to define who you are. You may connect most strongly with intense relationships, personal expression, and the emotional side of heroism. This Spider-Man is often driven by identity and loss as much as by responsibility, making him feel more intimate and personal. As an interpretation, this version highlights how adaptation can reshape the same character through mood, relationships, and emotional intensity."
  },
  mcu: {
    name: "MCU / Tom Holland Spider-Man",
    subtitle: "Humor, youth, mentorship, collaboration, and growth",
    image: "images/tom.jpg",
    tag: "Collaborative Hero",
    description:
      "You matched most closely with the MCU/Tom Holland version of Spider-Man. This result suggests that you value humor, energy, learning, and connection with others. You may see growth as something that happens through mentorship, teamwork, and finding your place in a larger system. This Spider-Man still develops responsibility, but he does so alongside friends, mentors, and a bigger heroic world. As an interpretation, this version reflects modern franchise storytelling, where Spider-Man is shaped through collaboration and ongoing development rather than standing completely alone."
  }
};

const screens = {
  intro: document.getElementById("intro-screen"),
  quiz: document.getElementById("quiz-screen"),
  results: document.getElementById("results-screen")
};

const questionText = document.getElementById("question");
const progressText = document.getElementById("progress");
const answersBox = document.getElementById("answers");
const resultName = document.getElementById("result-name");
const resultSubtitle = document.getElementById("result-subtitle");
const resultTag = document.getElementById("result-tag");
const resultDescription = document.getElementById("result-description");
const resultScores = document.getElementById("result-scores");
const resultImg = document.getElementById("result-img");

let currentQuestion = 0;
let scores = { raimi: 0, webb: 0, mcu: 0 };

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[name].classList.add("active");
}

function resetQuiz() {
  currentQuestion = 0;
  scores = { raimi: 0, webb: 0, mcu: 0 };
}

function startQuiz() {
  resetQuiz();
  renderQuestion();
  showScreen("quiz");
}

function renderQuestion() {
  const question = questions[currentQuestion];
  progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  questionText.textContent = question.prompt;
  answersBox.innerHTML = "";

  shuffleAnswers(question.answers).forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = answer.text;
    button.addEventListener("click", () => selectAnswer(answer));
    answersBox.appendChild(button);
  });
}

function shuffleAnswers(answers) {
  const shuffled = [...answers];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
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

function getResultKey() {
  if (scores.webb > scores.raimi && scores.webb > scores.mcu) {
    return "webb";
  }

  if (scores.mcu > scores.raimi && scores.mcu > scores.webb) {
    return "mcu";
  }

  return "raimi";
}

function showResults() {
  const resultKey = getResultKey();
  const profile = spiderProfiles[resultKey];

  resultTag.textContent = profile.tag;
  resultName.textContent = profile.name;
  resultSubtitle.textContent = profile.subtitle;
  resultDescription.textContent = profile.description;
  resultScores.textContent = `Score totals: Raimi/Tobey ${scores.raimi} | Webb/Andrew ${scores.webb} | MCU/Tom ${scores.mcu}`;
  resultImg.src = profile.image;
  resultImg.alt = profile.name;
  resultImg.style.display = "block";
  resultImg.onerror = () => {
    resultImg.style.display = "none";
  };

  showScreen("results");
}

document.getElementById("start-button").addEventListener("click", startQuiz);
document.getElementById("retake-button").addEventListener("click", startQuiz);
document.getElementById("home-button").addEventListener("click", () => showScreen("intro"));
