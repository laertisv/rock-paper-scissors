

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


function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}


function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const results = document.querySelector('ul');
    const resultItem = document.createElement('li');
    const resultText = document.createElement('span');
    if (humanChoice === computerChoice) {
        myResult = 'It\'s a tie!';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
        myResult = 'You win! ' + capitalizeFirstLetter(humanChoice) + ' beats ' + computerChoice + '.';
    } else {
        myResult = 'You lose! ' + capitalizeFirstLetter(computerChoice) + ' beats ' + humanChoice + '.';
    }
    resultItem.appendChild(resultText);
    resultText.textContent = myResult;
    results.appendChild(resultItem);
}




const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));