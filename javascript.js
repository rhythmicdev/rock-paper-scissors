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
        console.log("You chose rock and computer chose paper! Computer wins!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You chose rock and computer chose scissors! You win!");
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("You and computer both chose rock! Draw!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You chose paper and computer chose rock! You win!");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You chose paper and computer chose scissors! Computer wins!");
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("You and computer both chose paper! Draw!");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You chose scissors and computer chose rock! You lose!");
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("You and computer both chose scissors! Draw!");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You chose scissors and computer chose paper! You win!");
    }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));