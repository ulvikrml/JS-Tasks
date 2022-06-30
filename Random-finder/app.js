let choseBtn = document.querySelector('.chose-btn');
let choseSection = document.querySelector('.chose-sec');
let fromNum, toNum;
let random;
let intervalText = document.querySelector('.between');
let errorTxts = document.querySelectorAll('.error-txt')
let errBig = document.querySelector('.err-big');
let errPositive = document.querySelector('.err-positive');
let errBlank = document.querySelector('.err-blank');
function getRandomNum(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
}
choseBtn.addEventListener('click', (e) => {
    let fromInput = document.querySelector('.fromInput');
    let toInput = document.querySelector('.toInput');
    let fromInputValue = fromInput.value;
    let toInputValue = toInput.value;
    e.preventDefault();
    errorTxts.forEach(i=>i.classList.add('d-none'));
    if (fromInputValue.length > 0 && toInputValue.length > 0) {
        if(fromInputValue < 0 || toInputValue < 0){
            errPositive.classList.remove('d-none');
        }
        else{
            if(fromInputValue > toInputValue){
            errBig.classList.remove('d-none');
            }
            else{
                choseSection.classList.add('d-none');
                fromNum = +fromInputValue;
                toNum = +toInputValue;
                random = getRandomNum(fromNum, toNum);
                intervalText.textContent = `(Between ${fromNum} and ${toNum})`;
                fromInput.value = '';
                toInput.value = '';
            }
        }
    }
    else {
        errBlank.classList.remove('d-none')
    }
})
let setIntervalBtn = document.querySelector('.setInterval-btn');
setIntervalBtn.addEventListener('click',()=>{
    choseSection.classList.remove('d-none');

})
let check = document.querySelector('.check');
console.log(random);

let message = document.querySelector('.message');
let guessInput = document.querySelector('.guess');
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
            let choosen = guessInput.value;
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
            if (choosen.length == 0) {
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
    random = getRandomNum(fromNum, toNum);
    console.log(random);
    guessInput.value = '';
    body.style.backgroundColor = '#222'
    showNumber.innerHTML = '?';
    inc = 0;
    message.innerHTML = 'Start guessing...'
    topPoint = 10;
    score.innerHTML = topPoint;
    isActive = true;
})
guessInput.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        check.click();
    }
});