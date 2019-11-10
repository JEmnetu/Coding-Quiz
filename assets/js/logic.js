// DOM Variables
var startDiv = document.getElementById('starting-page');
var startButton = document.getElementById('start');
var questionEl = document.getElementById('question');
var choicesEl = document.getElementById('choices');

var currentQuestionIndex = 0;


startButton.addEventListener('click', setQuestion

    // questionEl.innerText = questions[0].title;
    // choicesDiv.innerText = questions[0].choices;

    // for (var i = 0; i < 4; i++) {
    //     var button = document.createElement('button');
    //     button.setAttribute('value', 'button');
    //     choicesEl.append(button);
    // }

)

function setQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById('question');
    alert("Start!");
    startDiv.setAttribute('class', 'hide');
    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach(function(choice, i) {

        var choiceNode = document.createElement("button");
        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('value', choice);

        choiceNode.textContent = i + 1 + ". " + choice;

        choicesEl.appendChild(choiceNode);
    })
}