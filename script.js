const quizQuestions=[
    {
        question : "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hyper Text Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question : "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style sheep",
        c: "Cartoon Style Sheet",
        d: "Cascading Super sheet",
        ans: "ans1"
    },
    {
        question : "Q3: What is the full form of HTTP?",
        a: "Hyper Text Transfor Protocol",
        b: "Hypertext Transfer Protocol",
        c: "Hello Text Transfer Protocol",
        d: "Hypertext Transfer Product",
        ans: "ans2"
    },
    {
        question : "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "Java Script",
        c: "Jscript",
        d: "Java Super",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let quetionCount = 0;
let score = 0;

const loadQuestion = () =>{
    let questionList=quizQuestions[quetionCount];
    if(quetionCount===quizQuestions.length-1){
        submit.innerHTML="Submit";
    }
    else{
        submit.innerHTML="Next";
    }
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    
}

loadQuestion();

const getCkeckAnswer = () =>{
    let answer;
    answers.forEach((currentAns) => {
        if(currentAns.checked){
            answer = currentAns.id;
        }
        
    });
    return answer;
}

const deselectAll = () =>{
    answers.forEach((currentAns)=>{
        currentAns.checked=false;
    })
}

submit.addEventListener('click', ()=>{
    const checkedAnswer = getCkeckAnswer();
    console.log(checkedAnswer)

    if(checkedAnswer === quizQuestions[quetionCount].ans){
        score++;
    }
    quetionCount++;

    deselectAll();
    if(quetionCount < quizQuestions.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
            <h3> Your Score ${score}/${quizQuestions.length}</h3>
            <button class="btn" onClick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
})