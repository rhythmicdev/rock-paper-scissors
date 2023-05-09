function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
    let choiceNum = getRandomInt(3);
    if (choiceNum===0) {
        computerSelection="rock";
    } else if (choiceNum===1) {
        computerSelection="paper";
    } else if (choiceNum===2) {
        computerSelection="scissors";
    }
    return computerSelection;
}

console.log(getComputerChoice());