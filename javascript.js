function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
    let choiceNum = getRandomInt(3);
    if (choiceNum===0) {
        return "rock";
    } else if (choiceNum===1) {
        return "paper";
    } else if (choiceNum===2) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You chose rock and computer chose paper! You lose!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You chose rock and computer chose scissors! You win!";
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return ("You and computer both chose rock! Draw!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return ("You chose paper and computer chose rock! You win!");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You chose paper and computer chose scissors! You lose!";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "You and computer both chose paper! Draw!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You chose scissors and computer chose rock! You lose!";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "You and computer both chose scissors! Draw!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You chose scissors and computer chose paper! You win!";
    }
}

//For testing
// const playerSelection = "scissors";
// const computerSelection = getComputerChoice();
// function aTest() {
//     console.log("test");
// }
//console.log(playRound(playerSelection, computerSelection));

const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');

btnRock.addEventListener('click', () => {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
});

btnPaper.addEventListener('click', () => {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
});

btnScissors.addEventListener('click', () => {
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
});

// function game() {
//     let roundNumber = 0;
//     let playerScore = 0;
//     let computerScore = 0;

//     while (roundNumber < 5) {
//         let playerSelection = prompt("Make your choice! Rock, paper or scissors?").toLowerCase();
//         let computerSelection = getComputerChoice();
//         let theResult = playRound(playerSelection, computerSelection);
//         if (theResult.includes("You win!") == true) {
//             playerScore++;
//         } else if (theResult.includes("You lose!") == true) {
//             computerScore++;
//         }
//         console.log(theResult);
//         console.log("Player: " + playerScore + " Computer: " + computerScore);
//         roundNumber++;
//     }

//     if  (playerScore > computerScore) {
//         console.log("You win the game!");
//     } else if (playerScore == computerScore) {
//         console.log("The game is a draw!");
//     } else {
//         console.log("Computer wins the game!")
//     }
// }

// game();