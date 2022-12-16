const resultOutput = document.querySelector('.result-output');
const player = document.querySelector('#player-score');
const computer = document.querySelector('#computer-score');
const playButtons = document.querySelectorAll('button');

let playerChoice = 0;
let computerChoice = 0;

let playerScore = 0;
let computerScore = 0;

playButtons.forEach((button) => {
    button.addEventListener('click', () => {      
        computerChoice = getComputerChoice();
        if (button.id == "rock-button") {
            playerChoice = 0;
        } else if (button.id == "paper-button") {
            playerChoice = 1;
        } else if (button.id == "scissors-button") {
            playerChoice = 2;
        }
        
        playGame();
    })
})

// Function to randomly return rock - 0, paper - 1, or scissors - 2.
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

// Function to commence a round.
function playRound() {
    const resultMatrix = [[0, 1, 2],
                        [2, 0, 1],
                        [1, 2, 0]];
    let result = resultMatrix[playerChoice][computerChoice];
    let convertedPlayerChoice = convertChoice(playerChoice);
    let convertedComputerChoice = convertChoice(computerChoice);

    if (result == 0) {
        resultOutput.textContent = 'It\'s a draw.';
    } else if (result == 1) {
        resultOutput.textContent = `You lose! ${convertedPlayerChoice} loses to ${convertedComputerChoice}!`;
        computerScore++;
    } else if (result == 2) {
        resultOutput.textContent = `You win! ${convertedPlayerChoice} beats ${convertedComputerChoice}!`;
        playerScore++;
    }
}

// Function to play the game until one player reaches 5 points.
function playGame() {
    playRound();
    printScore();
    
    if (playerScore == 5) {
        resultOutput.textContent = 'You won the game!';
        playerScore = 0;
        computerScore = 0;
        printScore();
    } else if (computerScore == 5) {
        resultOutput.textContent = 'You lost the game!';
        playerScore = 0;
        computerScore = 0;
        printScore();
    }
}

// Function to print out the current scores.
function printScore() {
    player.textContent = `Player: ${playerScore}`;
    computer.textContent = `Computer: ${computerScore}`;
}

// Function choices from number to rock/paper/scissors
function convertChoice(choice) {
    let convertedChoice = '';
    if (choice == 0) {
        convertedChoice = 'Rock';
    } else if (choice == 1) {
        convertedChoice = 'Paper';
    } else if (choice == 2) {
        convertedChoice = 'Scissors';
    }

    return convertedChoice;
}