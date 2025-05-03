var humanScore = 0;
var computerScore = 0;
function getComputerChoice() {
  let values = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}
function getHumanChoice() {
  let userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(userInput)) {
    userInput = prompt(
      "Invalid choice. Please enter rock, paper, or scissors:"
    ).toLowerCase();
  }
  return userInput;
}
function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game! Better luck next time.");
  } else {
    console.log("It's a tie overall!");
  }
}
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log("You win this round!");
  } else {
    computerScore++;
    console.log("Computer wins this round!");
  }
  console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
}

playGame();
