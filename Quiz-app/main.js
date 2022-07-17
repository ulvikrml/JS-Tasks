const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const answers = document.getElementsByName('answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const quizReload = document.querySelector('.quiz-reload');

const quizQuestions = document.querySelector('.quiz-questions');

let currentId = 0;

const updateQuiz = () =>{
    let currentQuestion = quizData[currentId];
    console.log(currentQuestion);
    questionEl.innerText = currentQuestion.question;
    a_text.innerText = currentQuestion.a;
    b_text.innerText = currentQuestion.b;
    c_text.innerText = currentQuestion.c;
    d_text.innerText = currentQuestion.d;
} 
updateQuiz();


const getCheckedAnswer = () => {
    let answer;
    
    answers.forEach(data =>{
        if(data.checked){
            answer = data.id;
        }
    })
    
    return answer;
}

let score = 0;
submitBtn.addEventListener('click',()=>{
    
    let checkedAnswer = getCheckedAnswer();
    if(checkedAnswer){
        let correctAnswer = quizData[currentId].correct;
        if(checkedAnswer == correctAnswer){
            score++;
            console.log('a');
        }
    }
    currentId++;
    
    if(currentId < quizData.length){
        updateQuiz();
    }
    
    else {
        quizQuestions.classList.add('hide');
        quizReload.classList.remove('hide');
        quizReload.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="reloadQuiz()">Reload</button>
        `
    }
    answers.forEach(data =>{
        data.checked = false;
    })
})

let reloadQuiz = () =>{
    currentId = 0;
    score = 0;
    updateQuiz();
    quizReload.classList.add('hide');
    quizQuestions.classList.remove('hide');
}