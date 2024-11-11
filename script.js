
const questions = [
    {
        question: "Which is the most populated country?",
        answers: [
            {text: "India", correct: true},
            {text: "Pakistan", correct: false},
            {text: "China", correct: false},
            {text: "Russia", correct: false}
        ]
    },

    {
        question: "Which is the tallest building in the world?",
        answers: [
            {text: "Eiffel Tower", correct: false},
            {text: "Burj Khalifa", correct: true},
            {text: "Pyramid", correct: false},
            {text: "Burj Al Arab", correct: false}
        ]
    },

    {
        question: "Coldest country in the world?",
        answers: [
            {text: "Antartica", correct: false},
            {text: "Pakistan", correct: false},
            {text: "Greenland", correct: true},
            {text: "Russia", correct: false}
        ]
    },

    {
        question: "Which country is called the Bread Basket?",
        answers: [
            {text: "Russia", correct: false},
            {text: "Pakistan", correct: false},
            {text: "China", correct: false},
            {text: "USA", correct: true}
        ]
    }
    
]

let currentIndex;
let score;
const question = document.getElementById('question');
const answersContainer = document.getElementById('answersContainer');
const nextButton = document.getElementById('next');

function startQuiz(){
    currentIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    loadQuestions(currentIndex);
}

function loadQuestions(currentIndex){
    nextButton.style.display = 'none';
    const currentQuestion = questions[currentIndex];
    
    question.innerHTML = '';
    question.innerHTML = `${currentIndex+1}. ${currentQuestion.question}`;
    
    answersContainer.innerHTML = '';
    currentQuestion.answers.map((answer) => {
        const button = document.createElement('button')
        button.classList.add('btn');
        button.value = answer.correct;
        button.innerHTML = answer.text
        answersContainer.appendChild(button);

        button.addEventListener('click', answerClick)
    })
 
}

function answerClick(e){
    
    if(e.target.value === 'true'){
        e.target.classList.add('btnCorrect');
        score++
    }else{
        e.target.classList.add('btnWrong');
    }
 
    Array.from(answersContainer.children).map((button)=>{
        if(button.value === 'true'){
            button.classList.add('btnCorrect')
        }
        button.disabled = true;
        button.classList.add('cursorDisable')
    })
    
    nextButton.style.display = 'block';
 
}

nextButton.addEventListener('click', nextClick);

function nextClick(){
  
  if(currentIndex < questions.length ){ 
     handleNext();
  }else{
     startQuiz();
  }
}

function handleNext(){
    currentIndex++;
    if(currentIndex < questions.length){
        loadQuestions(currentIndex);
    }else{
        showResult();
    }
}

function showResult(){
    const quizContainer = document.getElementById('quizContainer');
    question.innerHTML = '';
    answersContainer.innerHTML = '';
   
    question.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'Continue';
    
}

startQuiz();


  