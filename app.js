/*
Gets the computer's choice via a random number
*/
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
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
    var humanChoice = prompt('Please choose rock, paper, or scissors.').toLowerCase(); // Converts the human's choice to lowercase, so the function can validate the choice regardless of case.
    while (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        humanChoice = prompt('Invalid choice. Please choose rock, paper, or scissors.').toLowerCase();
    } // The while loop will continue to prompt the human to enter a valid choice until the human enters a valid choice.
    return humanChoice;
}