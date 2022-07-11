const selections = ['rock','paper','scissors'];
const buttons = document.querySelectorAll('button');
const playerImg = document.querySelector('.player-chose');
const compImg = document.querySelector('.comp-chose');
const winnerText = document.querySelector('.title');
const playerScoreTable = document.querySelector('.player-score');
const compScoreTable = document.querySelector('.comp-score');

let playerSc = 0;
let compSc = 0;

buttons.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        let playerChose = e.currentTarget.dataset.option;
        let compChose = getCompOption();

        playerImg.src =  `./assets/${playerChose}.png`;
        compImg.src =  `./assets/${compChose}.png`;

        isWinner(playerChose,compChose);

        playerScoreTable.textContent = playerSc;
        compScoreTable.textContent = compSc;
    })
})
let isWinner = (player,comp) =>{
    
    // Checking for draw
    if(player == comp){
        winnerText.textContent = 'It is a tie'
        return;
    }

    // Checking for rock
    if(player == 'rock'){
        if(comp == 'scissors'){
            winnerText.textContent = 'Player Wins';
            playerSc++;
            return;
        }else{
            winnerText.textContent = 'Computer Wins';
            compSc++;
            return;
        }
    }

    // Checking for paper
    if(player == 'paper'){
        if(comp == 'rock'){
            winnerText.textContent = 'Player Wins';
            playerSc++;
            return;
        }else{
            winnerText.textContent = 'Computer Wins';
            compSc++;
            return;
        }
    }
    
    // Checking for scissors
    if(player == 'scissors'){
        if(comp == 'paper'){
            winnerText.textContent = 'Player Wins';
            playerSc++;
            return;
        }else{
            winnerText.textContent = 'Computer Wins';
            compSc++;
            return;
        }
    }
}
let getCompOption = () =>{
    return selections[Math.floor(Math.random() * 3)];
}