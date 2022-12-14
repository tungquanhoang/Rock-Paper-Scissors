let winMessage = "You Win!";
let loseMessage = "You Lose!";
let drawMessage = "Draw!";

// Function to randomly return rock, paper, or scissors.
function getComputerChoice() {
    let random_choice = Math.floor(Math.random() * 3);
    let computer_choice;
    if (random_choice == 0) {
        computer_choice = "rock";
    } else if (random_choice == 1) {
        computer_choice = "paper";
    } else {
        computer_choice = "scissors";
    }
    console.log(`Computer: ${computer_choice}`);
    return computer_choice;
}

// Function to commence a round.
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (computerSelection == playerSelection) {
        return drawMessage;
    } else if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            return winMessage;
        } else if (playerSelection == "scissors") {
            return loseMessage;
        }
    } else if (computerSelection == "paper") {
        if (playerSelection == "rock") {
            return loseMessage;
        } else if (playerSelection == "scissors") {
            return winMessage;
        }
    } else if (computerSelection == "scissors") {
        if (playerSelection == "rock") {
            return winMessage;
        } else if (playerSelection == "paper") {
            return loseMessage;
        }
    }
}

// Function to start a 5-round game.
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let computerSelection;
    
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt();
        console.log(`Player: ${playerSelection}`);
        computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result == winMessage) {
            playerScore++;
        } else if (result == loseMessage) {
            computerScore++;
        }
        console.log(result);
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    }
}

game();