const quizQuestions=[
    {
        question : "Q1: What is the full form of JS?",
        a: "JavaScript",
        b: "Java Script",
        c: "Jscript",
        d: "Java Super",
        ans: "ans1"
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
        question : "Q3: Web browsers provide which property that allows developers to modify the DOM?",
        a: "amendHTML",
        b: "changeHTML",
        c: "innerHTML",
        d: "modifyHTML",
        ans: "ans3"
    },
    {
        question : "Q4: What is the property to access the first child of a node?",
        a: "timestamp.Child1",
        b: "timestamp.Child(1)",
        c: "timestamp.Child(0)",
        d: "timestamp.firstChild",
        ans: "ans4"
    },
    {
        question : "Q5: The nodes that represent HTML elements are th",
        a: "System",
        b: "Tree",
        c: "Window",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question : "Q6: Document object is part of ____ object.",
        a: "Window",
        b: "Element",
        c: "Location",
        d: "Browser",
        ans: "ans1"
    },
    {
        question : "Q7: Another term for a local scope JavaScript variable is __.",
        a: "global scope",
        b: "function scope",
        c: "program code",
        d: "code scope",
        ans: "ans2"
    },
    {
        question : "Q8: The URL property belongs to which of the following object?",
        a: "Document",
        b: "Element",
        c: "Location",
        d: "Event",
        ans: "ans1"
    },
    {
        question : "Q9: The setTimeout() belongs to which object?",
        a: "Element",
        b: "Window",
        c: "Location",
        d: "Event",
        ans: "ans2"
    },
    {
        question : "Q10: ______is included in the document object of BOM.",
        a: "Form",
        b: "Images",
        c: "Links and other elements",
        d: "All of these",
        ans: "ans4"
    },
    
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