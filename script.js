function getComputerChoice(){
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        return 'rock';
    } else if (randomNumber === 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}

function rps(userChoice, computerChoice) {
    userChoice = userChoice.toLowerCase(); // Convert userChoice to lowercase
    computerChoice = computerChoice.toLowerCase(); // Convert computerChoice to lowercase


    if (userChoice === computerChoice){
        console.log('The game is a tie!');
        rps(userChoice, getComputerChoice());
    }
    if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
            return false;
        } else {
            return true;
        }
    }
    if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return false;
        } else {
            return true;
        }
    }
    if (userChoice === 'scissors'){
        if (computerChoice === 'rock'){
            return false;
        } else {
            return true;
        }
    }
}

function increaseScore(gameOutcome) {
    if (gameOutcome === 'win'){
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
    gameoverCheck();
}

function gameoverCheck(){
    if (parseInt(playerScore.textContent) === 5){
        winner.textContent = 'You win!';
    } else if (parseInt(computerScore.textContent) === 5) {
        winner.textContent = 'You lose!';
    } else {
        winner.textContent = '';
    }
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let winner = document.getElementById('winner');

rock.addEventListener('click', function(){
    const userChoice = 'rock';
    const computerChoice = getComputerChoice();
    const win = rps(userChoice, computerChoice);
    increaseScore(win ? 'win' : 'lose');
});

paper.addEventListener('click', function(){
    const userChoice = 'paper';
    const computerChoice = getComputerChoice();
    const win = rps(userChoice, computerChoice);
    increaseScore(win ? 'win' : 'lose');
});

scissors.addEventListener('click', function(){
    const userChoice = 'scissors';
    const computerChoice = getComputerChoice();
    const win = rps(userChoice, computerChoice);
    increaseScore(win ? 'win' : 'lose');
});