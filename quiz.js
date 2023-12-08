var question = document.getElementById("div2")
var answer1 = document.getElementById("but1")
var answer2 = document.getElementById("but2")
var answer3 = document.getElementById("but3")
var answer4 = document.getElementById("but4")
var nextButton = document.getElementById("next")
var mainDiv = document.getElementById("main")
let correctAnsw = 0;
// is clicked is going to tell you if an answer has been clicked or not
let isClicked = false;

const allButtons = document.querySelectorAll(".button")

// creating an array with all the questions and answers
const questions=[
    {
        question:"What is Rauw Alejandro's full name?",
        answers:[
            ["Rauw Martinez Vazquez",false],
            ["Raul Alejandro Martinez",false],
            ["Raúl Alejandro Ocasio Ruiz",true],
            ["Raúl Alejandro Ocasio Rodriguez",false],
        ]
    },
    {
        question:"How old is Rauw?",
        answers:[
            [" 26",false],
            ["24",false],
            ["25",false],
            ["30",true],
        ]
    },
    {
        question:"Where is Rauw from?",
        answers:[
            ["Puerto Rico",true],
            ["Dominic Republic",false],
            ["Cuba",false],
            ["Columbia",false],
        ]
    },
    {
        question:"What is Rauw latest Album?",
        answers:[
            ["Playa Saturno",true],
            ["Saturno",false],
            ["Vice Versa",false],
            ["Afrodisiaco",false],
        ]
    },
    {
        question:"Who was Rauw engaged to?",
        answers:[
            ["Becky G",false],
            ["Rosalia",true],
            ["Karol G",false],
            ["Bad Gyal ",false],
        ]
    },
    {
        question:"What was his first concert he payed to go to?",
        answers:[
            ["Daddy Yankee",false],
            ["Aventura",false],
            ["Zion y Lennox",true],
            ["Luis Miguel",false],
        ]
    },
    {
        question: "Other than Spanish, what language does Rauw Alejandro speak?",
        answers:[
             ["French",false],
             ["English",true],
             ["Italian",false],
             ["German",false],
        ]
    },
    {
       question: "When did Rauw begin his music career?",
        answers:[
         ["2018",false],
         ["2020",false],
         ["2023",false],
         ["2014",true],
        ]
    },
    {
      question: "How many awards did Rauw Alejandro win?",
      answers:[
         ["18",false],
         ["39",false],
         ["35",true],
         ["15",false],
       ]
    },
    {
      question: "How many times did Rauw get nominated for an award?",
       answers:[
       ["250",false],
       ["214",true],
       ["200",false],
       ["220",false],
       ]
    }
]

// creating a variable to keep track on the current question that your on 
let currentQuestion=0;
// creating a function to help load the question
function loadQuestion(){
   isClicked = false;
   let questionInfo= questions[currentQuestion];
   question.innerText=questionInfo.question;
   let options=document.querySelectorAll(".button");
//   creating a for loop to help load the answers and the questions
   for(let i=0; i < questionInfo.answers.length;i++){
    options[i].innerText=questionInfo.answers[i][0];
   }
   for(let i=0; i < allButtons.length;i++){
    allButtons[i].style.backgroundColor = "rgb(209, 216, 244)";
   };

}
loadQuestion();

// creating a function to allow the next button to take you to the next question
function nextQuestion(){
//     nextButton = questions[i]++;
   currentQuestion++;
   if(currentQuestion < 10){
    loadQuestion();
   }
 }
nextButton.addEventListener("click",nextQuestion)

// event is an object that gives you information about the event that was clicked
function checkQuestion(event){
    // .target is what was clicked
    
    let buttonClicked=event.target;
    let buttonText = buttonClicked.innerText;
    let isCorrect = false;

    for( let i=0; i < questions[currentQuestion].answers.length;i++){
      if(buttonText === questions[currentQuestion].answers[i][0]){
        isCorrect = questions[currentQuestion].answers[i][1];
       }
    }
    // helps you only choose an answer once
    if(!isClicked){
        if(isCorrect){
            // changing the background color to green if the answer you picked is correct
       buttonClicked.style.backgroundColor = "green";
       correctAnsw++;
       }
        else{
              // changing the background color to red if the answer you picked is wrong
        buttonClicked.style.backgroundColor = "red";
        }
    }
    isClicked = true;
    console.log(currentQuestion)
    // says the total answers you got right 
    if(currentQuestion>8){
        let score= document.createElement("p");
        score.innerText = " You got " + correctAnsw + " out of 10!";
        score.classList.add("grade");
        mainDiv.appendChild(score)
    }
}
 for(let i=0; i<allButtons.length;i++){
    allButtons[i].addEventListener("click",checkQuestion);
}
// is clicked is going to tell you if an answer has been clicked or not

