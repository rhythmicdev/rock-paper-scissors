function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
    let choiceNum = getRandomInt(3);
    if (choiceNum===0) {
        computerChoice="rock";
    } else if (choiceNum===1) {
        computerChoice="paper";
    } else if (choiceNum===2) {
        computerChoice="scissors";
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        roundResult = "You chose rock and computer chose paper! You lose!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        roundResult = "You chose rock and computer chose scissors! You win!";
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        roundResult = ("You and computer both chose rock! Draw!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        roundResult = ("You chose paper and computer chose rock! You win!");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundResult = "You chose paper and computer chose scissors! You lose!";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        roundResult = "You and computer both chose paper! Draw!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundResult = "You chose scissors and computer chose rock! You lose!";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        roundResult = "You and computer both chose scissors! Draw!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundResult = "You chose scissors and computer chose paper! You win!";
    }
    return roundResult;
}

function game() {
    let roundNumber = 0;
    let playerScore = 0;
    let computerScore = 0;

    while (roundNumber < 5) {
        let playerSelection = prompt("Make your choice!").toLowerCase();
        let computerSelection = getComputerChoice();
        let theResult = playRound(playerSelection, computerSelection);
        if (theResult.includes("You win!") == true) {
            playerScore++;
        } else if (theResult.includes("You lose!") == true) {
            computerScore++;
        }
        console.log(theResult);
        console.log("Player: " + playerScore + " Computer: " + computerScore);
        roundNumber++;
    }

    if  (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore == computerScore) {
        console.log("The game is a draw!");
    } else {
        console.log("Computer wins the game!")
    }
}

game();

//For testing
//const playerSelection = "scissors";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));