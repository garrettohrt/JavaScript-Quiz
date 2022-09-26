var timer = document.querySelector("#time");
var instructions = document.querySelector(".instructions");
var startButton = document.querySelector("#startButton");
var questionP = document.querySelector(".question");
var choicesBlock = document.querySelector(".choices");
var result = document.querySelector(".result");
var finalScore = document.querySelector(".final-score");
var endOfGame = document.querySelector(".end-of-game");

var buttonAnswerA = document.querySelector("#answer1");
var buttonAnswerB = document.querySelector("#answer2");
var buttonAnswerC = document.querySelector("#answer3");
var buttonAnswerD = document.querySelector("#answer4");

var submitInitials = document.querySelector(".initial-form");

var timeSeconds = timer.textContent;
var questionCount = 0;

//Initialize high score to 0 if there is none in local storage
var highScore = localStorage.getItem("highscore");
if (highScore === null) {
    localStorage.setItem("highScore", 0);
    highScore = 0;
}

var questions = [{
    ask: "Inside which HTML element do we put the JavaScript?",
    answers: ["<script>", "<javascript>", "<js>", "<scripting>"],
    correctAnswer: 0
},
{
    ask: "How does a WHILE loop start",
    answers: ["while (i <= 10)", "while (i <+10; i++)", "while i = 1 to 10"],
    correctAnswer: 0
},
{
    ask: "How do you call a function named “myFunction”?",
    answers: ["myFunction", "myFunction()", "call myFunction()", "call function myFunction()"],
    correctAnswer: 1
},
{
    ask: "How do you start an IF statement in JavaScript?",
    answers: ["if i = 5", "if i == 5 then", "if i = 5 then", "if (i == 5)"],
    correctAnswer: 3
},
{
    ask: "How do you start a FOR loop in JavaScript?",
    answers: ["for i = 1 to 5", "for (i =0; i <= 5; i++)", "for (i <= 5; i++)", "for (i = 0; i <= 5)"],
    correctAnswer: 1
},
{
    ask: "How can you add a comment in JavaScript?",
    answers: ["‘This is a comment", "<!--This is a comment -->", "//This is a comment", "**This is a comment**"],
    correctAnswer: 2
},
{
    ask: "How to insert a comment that has more than one line",
    answers: ["/*This comment has more than one line*/", "<!--This comment has more than one line-->", "//This comment has more than one line//"],
    correctAnswer: 0
},
{
    ask: "What event occurs when the user clicks on an HTML element?",
    answers: ["onmouseclick", "onchange", "onmouseover", "onclick"],
    correctAnswer: 3
},
{
    ask: "How do you declare a JavaScript variable?",
    answers: ["v carName;", "var carName;", "variable carName;", "v (carName);"],
    correctAnswer: 1
},
{
    ask: "Which operator is used to assign a value to a variable?",
    answers: ["x", "*", "="],
    correctAnswer: 2
}
]

function questionCheck(timerInterval) {
    checkTime(timerInterval);

    // Check to make sure the questions have not all been answered before displaying on the page.
    if (questionCount < questions.length) {
        questionP.textContent = questions[questionCount].ask;

        buttonAnswerA.textContent = questions[questionCount].answers[0];
        buttonAnswerB.textContent = questions[questionCount].answers[1];
        buttonAnswerC.textContent = questions[questionCount].answers[2];
        buttonAnswerD.textContent = questions[questionCount].answers[3];
    } else {
        endGame();
    }
}

function checkAnswer() {

    // Check the button selected to see if it is the correct answer
    if ((this.textContent) == (questions[questionCount].answers[questions[questionCount].correctAnswer])) {
        result.textContent = "CORRECT";
    } else {
        timeSeconds -= 10;
        result.textContent = "WRONG";
        if (timeSeconds < 1) {
            endGame();
        }
    }

    questionCount++;

    questionCheck();
}

// Check to make sure there is still time left.
function checkTime(timerInterval) {
    if (questionCount == questions.length) {
        clearInterval(timerInterval);
        endGame();
    } else if (timeSeconds <= 0) {
        timer.textContent = 0;
        timeSeconds = 0;
        clearInterval(timerInterval);
        endGame();
    }
}

function endGame() {
    questionP.style.display = "none";
    choicesBlock.style.display = "none";
    result.style.display = "none";
    endOfGame.style.display = "block";

    // Check to see if the user's score is the new high score.
    if (timeSeconds > parseInt(localStorage.getItem("highScore"))) {
        finalScore.textContent = ("You have the new high score! Your final score is " + timeSeconds + ".");
    } else {
        finalScore.textContent = ("Your final score is " + timeSeconds + ".");
    }
}

// Store the user's score in local storage.
function resetGame() {
    var user_initials = document.querySelector("#user_initials").value;

    localStorage.setItem("highScore", timeSeconds);
    localStorage.setItem(user_initials, timeSeconds);
}

startButton.addEventListener("click", function () {
    var timerDecrease = setInterval(function () {
        timeSeconds--;
        timer.textContent = timeSeconds;
        checkTime(timerDecrease);
    }, 1000)

    instructions.style.display = "none";
    choicesBlock.style.display = "block";

    questionCheck(timerDecrease);
})

// Assigns event listeners to all the answer choices.
var buttons = document.querySelectorAll(".answer-choice").forEach(function (item) {
    item.addEventListener("click", checkAnswer);
})