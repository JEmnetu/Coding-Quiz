// DOM Variables
var startDiv = document.getElementById('starting-page');
var startButton = document.getElementById('start');
var questionEl = document.getElementById('question');
var questionsDiv = document.getElementById('questions');
var choicesEl = document.getElementById('choices');
var sfxCorrect = new Audio("assets/sfx/correct.wav");
var sfxIncorrect = new Audio("assets/sfx/incorrect.wav");
var currentQuestionIndex = 0;
var timeEl = document.getElementById('time');
var time = questions.length * 15;
var scoreEl = document.getElementById('final-score');
var submitBtn = document.getElementById('submit');
var nameEl = document.getElementById('userN');


var timer;




// function tick() {
//     
//     if (time == 0) {
//         return false;
//     }
// }
function begin() {
    timer = setInterval(clockTick, 1000);
    timeEl.textContent = time;
    startDiv.setAttribute('class', 'hide');
    setQuestion();
}

function setQuestion() {

    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById('question');





    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach(function(choice, i) {

        var choiceNode = document.createElement("button");
        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('value', choice);

        choiceNode.textContent = i + 1 + ". " + choice;

        choiceNode.onclick = questionClick;

        choicesEl.appendChild(choiceNode);
    })
}

function questionClick() {
    if (
        this.value !== questions[currentQuestionIndex].answer
    ) {
        time -= 15;
        sfxIncorrect.play();
        alert('Wrong Answer!');
    } else {
        sfxCorrect.play();
        alert('Correct!');
    }

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        setQuestion();
    }

}

function clockTick() {
    time--;
    timeEl.textContent = time;
    if (time <= 0) {
        quizEnd();


    }
}

function quizEnd() {
    var endScreen = document.getElementById('end-screen');
    clearInterval(timer);
    endScreen.removeAttribute('class');

    questionsDiv.setAttribute('class', 'hide');
    scoreEl.textContent = time;
    console.log(time);

    timeEl.textContent = 0;

}

function saveScore() {

    var name = nameEl.value;
    if (name !== "") {

        var highScore = JSON.parse(window.localStorage.getItem('highScore')) || [];

        var myScore = {
            score: time,
            userName: name
        };

        highScore.push(myScore);
        window.localStorage.setItem('highscore', JSON.stringify(highScore));

        window.location.href = 'highscores.html';
    }
}
startButton.addEventListener('click', begin




    // questionEl.innerText = questions[0].title;
    // choicesDiv.innerText = questions[0].choices;

    // for (var i = 0; i < 4; i++) {
    //     var button = document.createElement('button');
    //     button.setAttribute('value', 'button');
    //     choicesEl.append(button);
    // }

)
submitBtn.addEventListener('click', saveScore)