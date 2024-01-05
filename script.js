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
            return 'Computer wins!';
        } else {
            return 'User wins!';
        }
    }
    if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return 'Computer wins!';
        } else {
            return 'User wins!';
        }
    }
    if (userChoice === 'scissors'){
        if (computerChoice === 'rock'){
            return 'Computer wins!';
        } else {
            return 'User wins!';
        }
    }
}

function game(userChoice){
    for (var i = 0; i < 5; i++){
        console.log('Round ' + (i + 1) + ':' );
        prompt('Choose rock, paper, or scissors: ')
        console.log(rps(userChoice, getComputerChoice()));
    }
}

game(prompt('Choose rock, paper, or scissors: '))