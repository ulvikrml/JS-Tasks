let check = document.querySelector('.check');
function getRandomNum(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
}
let random = getRandomNum(1, 20);
console.log(random);
let message = document.querySelector('.message');
let input = document.querySelector('input');
let showNumber = document.querySelector('.number')
let inc = 0;
let score = document.querySelector('.score');
let highScoreLabel = document.querySelector('.highscore');
let topPoint = 10;
let body = document.querySelector('body');
let highScore = 0;
let isActive = true;
check.addEventListener('click', () => {
    if (isActive) {
        inc = inc + 1;
        if (topPoint != 1) {
            topPoint = topPoint - 1;
            score.innerHTML = topPoint;
            let choosen = input.value;
            if (random == choosen) {
                topPoint++;
                score.innerHTML = topPoint;
                message.innerHTML = 'Nice shoot';
                showNumber.innerHTML = choosen;
                body.style.backgroundColor = 'rgb(96, 179, 71)';
                if (topPoint > highScore) {
                    highScore = topPoint;
                    highScoreLabel.innerHTML = highScore;
                }
                isActive = false;
            }
            else if (random > choosen) {
                message.innerHTML = ((random - choosen) == 2) ? 'Close 📈' : ((random - choosen) == 1) ? 'Too close 📈' : 'Go up 📈 ';
            }
            else if (random < choosen) {
                message.innerHTML = ((random - choosen) == 2) ? 'Close 📉' : ((random - choosen) == 1) ? 'Too close 📉' : 'Go down 📉 ';
            }
            if (choosen == 0) {
                message.innerHTML = 'Write your guess!';
            }
        }
        else {
            score.innerHTML = 0;
            message.innerHTML = '💥 You lost the game!';
        }
    }
})
let again = document.querySelector('.again');
again.addEventListener('click', () => {
    random = getRandomNum(1, 20);
    console.log(random);
    input.value = '';
    body.style.backgroundColor = '#222'
    showNumber.innerHTML = '?';
    inc = 0;
    message.innerHTML = 'Start guessing...'
    topPoint = 10;
    score.innerHTML = topPoint;
    isActive = true;
})
input.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        check.click();
    }
});