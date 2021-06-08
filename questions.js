//Webdev Simplified
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

let countRightAnswers = 0;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  countRightAnswers = 0;
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
  if (selectedButton.dataset = correct) {
    countRightAnswers++;
 }
 document.getElementById('right-answers').innerHTML = countRightAnswers;
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is the name of the kingdom in the west?',
    answers: [
      { text: 'Gondor', correct: false },
      { text: 'Rongod', correct: true },
      { text: 'Norgod', correct: false},
      { text: 'Mordor', correct: false}
    ]
  },
  {
    question: 'What is the name of Skeletonys worst enemy?',
    answers: [
      { text: 'Maenan', correct: true },
      { text: 'Aedden', correct: false },
      { text: 'Aegon', correct: false },
      { text: 'Maedden', correct: false }
    ]
  },
  {
    question: 'What color is the precious stone?',
    answers: [
      { text: 'PURPLE!', correct: false },
      { text: 'You can not describe it!', correct: false },
      { text: 'No color', correct: false },
      { text: 'Nobody knows, except for the line of the kings in the west.', correct: true }
    ]
  },
  {
    question: 'How tall is Skeletony?',
    answers: [
      { text: '25ft 8inches', correct: true },
      { text: '9ft 7inches', correct: false },
      { text: '55ft 24inches', correct: false }
    ]
  },
  {
    question: 'How much does Skeletony weigh?',
    answers: [
      { text: '750kg', correct: false },
      { text: '4000lbs', correct: true },
      { text: '7g', correct: false }
    ]
  },
  {
    question: 'What is the name of Skeletonys army?',
    answers: [
      { text: 'The sons of Skeletony', correct: true },
      { text: 'The orchs', correct: false },
      { text: 'The brutes', correct: false },
      { text: 'The tall and lanky ones', correct: false }
    ]
  },
  {
    question: 'What weapon does Skeletony bear?',
    answers: [
      { text: 'A giant, feared sword, made from the remains of his dead enemies.', correct: true },
      { text: 'A tiny hammer', correct: false },
      { text: 'Half an axe', correct: false },
      { text: 'A stick', correct: false }
    ]
  },
  {
    question: 'How big is Skeletonys army?',
    answers: [
      { text: '12 tough skeletons', correct: false },
      { text: '5000', correct: false },
      { text: '20000', correct: true },
      { text: 'He only has 2', correct: false }
    ]
  },
  {
    question: 'How much can Skeletony benchpress?',
    answers: [
      { text: '90kg', correct: false },
      { text: '500kg', correct: false },
      { text: '2250lbs', correct: true },
      { text: 'More than Jacob and Elton', correct: true }
    ]
  },
  {
    question: 'How did the kingdom in the west capture the precious stone?',
    answers: [
      { text: 'They found it in a puddle', correct: false },
      { text: 'They did not find it - someone else did', correct: false },
      { text: 'It was excavated from the deep mines', correct: true },
      { text: 'It does not exist', correct: false }
    ]
  },
  {
    question: 'Why does Skeletony want to capture the precious stone?',
    answers: [
      { text: 'He believes that with it in his hands he could rule the world', correct: false },
      { text: 'He feels like it', correct: false },
      { text: 'He only wants it because he hates the kingdom in the west so much', correct: true },
      { text: 'He wants to eat it', correct: false }
    ]
  },
  {
    question: 'What is the true power of the precious stone?',
    answers: [
      { text: 'Nobody knows', correct: true },
      { text: 'Destroy everyone and everything', correct: false },
      { text: 'It looks cool', correct: false },
      { text: 'It will give the skeletons real bodies again', correct: false }
    ]
  },
  {
    question: 'Who does the people of the kingdom in the west belive is the fulfiller of the prophecy?',
    answers: [
      { text: 'Nobody', correct: false },
      { text: 'Maenan', correct: true },
      { text: 'Menon', correct: false },
      { text: 'Skeletony', correct: false }
    ]
  },
  {
    question: 'What are the people of Rongod called?',
    answers: [
      { text: 'The humans', correct: false },
      { text: 'The living ones', correct: false },
      { text: 'Numenorians', correct: false },
      { text: 'Rongodians', correct: true }
    ]
  },
  {
    question: 'What does the prophecy tell?',
    answers: [
      { text: 'That one day, the dark power from the east will attack Rongod and steal the precious stone', correct: true },
      { text: 'That one day, Skeletonys massive head will begin to shrink', correct: false },
      { text: 'There is no prophecy', correct: false },
      { text: 'That one day, Maenan will battle the massive skeleton 1v1', correct: false }
    ]
  }

]