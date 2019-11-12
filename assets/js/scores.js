var clearBtn = document.getElementById('clear');

function printScores() {
    var highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];

    highscore.forEach(function(myScore) {
        var scoreLi = document.createElement('li');
        var scoreEl = document.getElementById('scores');
        scoreLi.textContent = myScore.userName + ' - ' + myScore.score;

        scoreEl.appendChild(scoreLi);

    });
}

function clear() {

    window.localStorage.removeItem('highscore');
    window.location.reload();
}

clearBtn.addEventListener('click', clear);
printScores();