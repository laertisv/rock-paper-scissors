

/*
Gets the computer's choice via a random number
*/
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'scissors';
    }
}

/*
Gets the human's choice via a prompt. If the human enters an invalid choice, the function will prompt the human to enter a valid choice.
*/
function getHumanChoice() {
    let humanChoice = prompt('Please choose rock, paper, or scissors.').toLowerCase(); // Converts the human's choice to lowercase, so the function can validate the choice regardless of case.
    while (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        humanChoice = prompt('Invalid choice. Please choose rock, paper, or scissors.').toLowerCase();
    } // The while loop will continue to prompt the human to enter a valid choice until the human enters a valid choice.
    return humanChoice;
}

/*
Capitalizes the first letter of a string.
*/
function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}


/*
Plays a game of rock, paper, scissors. The function will play five rounds of rock, paper, scissors. The function will increment the human's score if the human wins, the computer's score if the computer wins, or neither score if it's a tie. The function will then determine the winner of the game based on the scores.
*/
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    /*
    Plays a round of rock, paper, scissors. The function will increment the human's score if the human wins, the computer's score if the computer wins, or neither score if it's a tie.
    */
    function playRound() {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        if (humanChoice === computerChoice) {
            console.log('It\'s a tie!');
        } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++;
            console.log('You win! ' + capitalizeFirstLetter(humanChoice) + ' beats ' + computerChoice + '.');
        } else {
            computerScore++;
            console.log('You lose! ' + capitalizeFirstLetter(computerChoice) + ' beats ' + humanChoice + '.');
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (humanScore > computerScore) {
        console.log('You win the game!');
    } else if (humanScore < computerScore) {
        console.log('You lose the game!');
    
    } else {
        console.log('The game is a tie!');
    }
}