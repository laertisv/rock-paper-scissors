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


function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const results = document.querySelector('ul');
    const resultItem = document.createElement('li');
    const resultText = document.createElement('span');
    if (humanChoice === computerChoice) {
        myResult = 'It\'s a tie! You have ' + humanScore + ' points and the computer has ' + computerScore + ' points.' ;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++
        myResult = 'You win! ' + capitalizeFirstLetter(humanChoice) + ' beats ' + computerChoice + '. You have ' + humanScore + ' points and the computer has ' + computerScore + ' points.' ;
    } else {
        computerScore ++
        myResult = 'You lose! ' + capitalizeFirstLetter(computerChoice) + ' beats ' + humanChoice + '. You have ' + humanScore + ' points and the computer has ' + computerScore + ' points.' ;
    }
    if (humanScore === 5) {
        myResult += ' You win the Game! You can start a new game now.'
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
            myResult += ' You lose the Game! You can start a new game now.'
            humanScore = 0;
            computerScore = 0;
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