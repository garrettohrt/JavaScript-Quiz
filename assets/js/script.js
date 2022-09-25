var startButton = document.querySelector("#start-button")
var timeSeconds = document.querySelector("#time")

var buttonAnswerA = document.querySelector("#answer1");
var buttonAnswerB = document.querySelector("#answer2");
var buttonAnswerC = document.querySelector("#answer3");
var buttonAnswerD = document.querySelector("#answer4");

startButton.addEventListener("click", function () {
    console.log("click")
    var timeDecrease = setInterval(function () {
        if (timeSeconds.textContent <= 0) {
            return clearInterval(timeDecrease)
        }
        timeSeconds.textContent--
    }, 1000)

    question.textContent = questionArray[questionCount].question
})

var questionCount = 0
var answerChoice = document.querySelector(".answer-choice")

answerChoice.addEventListener("click", function () {
    questionCount++;
    question.textContent = questionArray[questionCount].question

    console.log("questionCount ", questionCount)
})
var question = document.querySelector(".question")
var questionArray = [
    {
        question: "Inside which HTML element do we put the JavaScript",
        answers: [
            "<js>", "<script>", "<javascript>", "<scripting>"
        ],
        correctAnswer: 1
    },
{
    question: "Inside which HTML element do we put the JavaScript",
    answers: [
        "<js>", "<script>", "<javascript>", "<scripting>"
    ],
    correctAnswer: 1
},
{
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
        "Both the <head> section and the <body> section are correct", "<script>", "<body>",
    ],
    correctAnswer: 2
},
{
    question: "What is the correct syntax for referring to an external script called xxx.js?",
    answers: [
        "<script href=xxx.js>", "<script name=xxx.js>", "<script src=xxx.js>"
    ],
    correctAnswer: 2
}

]




