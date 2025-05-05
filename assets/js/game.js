var humanScore = 0;
var computerScore = 0;
var gameCont = 1;
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const round = document.getElementById("round-number");
function disableGameButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

function enableGameButtons() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}

function getComputerChoice() {
  let values = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

function playGame(humanSelection, computerSelection) {
  if (humanScore <= 4 && computerScore <= 4) {
    playRound(humanSelection, computerSelection);
  } else {
    document.querySelector(".Game-winner").style.display = "flex";
    disableGameButtons();
    const resultMessage = document.querySelector(".winner-message");
    if (humanScore > computerScore) {
      resultMessage.innerText = "You win the game!";
    } else if (computerScore > humanScore) {
      resultMessage.innerText =
        "Computer wins the game! Better luck next time.";
    } else {
      resultMessage.innerText = "It's a tie!";
    }
  }
}
function playRound(humanChoice, computerChoice) {
  imageDecision(humanChoice, computerChoice);

  const playerScoreCard = document.getElementById("player-score");
  const computerScoreCard = document.getElementById("computer-score");
  const resultMessage = document.getElementById("result-versus");
  if (humanChoice === computerChoice) {
    resultMessage.innerText = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    gameCont++;
    round.innerText = "Round " + gameCont;
    humanScore++;
    resultMessage.innerText = "You win this round!";
  } else {
    gameCont++;
    round.innerText = "Round " + gameCont;
    computerScore++;
    resultMessage.innerText = "Computer wins this round!";
  }
  playerScoreCard.innerText = humanScore;
  computerScoreCard.innerText = computerScore;
}
function imageDecision(humanChoice, computerChoice) {
  const playerImage = document.getElementById("player-image-decision");
  const computerImage = document.getElementById("computer-image-decision");
  playerImage.src = `assets/images/${humanChoice}.png`;
  computerImage.src = `assets/images/${computerChoice}.png`;
}

// Start the game
const startButton = document.getElementById("start-button");
const playerNameInput = document.getElementById("player-name");
startButton.addEventListener("click", function () {
  var playerName = document.getElementById("player-name").value;
  if (playerName === "") {
    alert("Please enter your name to start the game.");
    return;
  }
  enableGameButtons();
  document.getElementById("card-name").innerText = playerName + "Score";
  document.getElementById("card-decision-name").innerText = playerName;
  startButton.disabled = true;
  playerNameInput.disabled = true;
  round.innerText = "Round " + gameCont;

  humanScore = 0;
  computerScore = 0;
});

// Add event listeners to the buttons

rockButton.addEventListener("click", function () {
  playGame("rock", getComputerChoice());
});
paperButton.addEventListener("click", function () {
  playGame("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", function () {
  playGame("scissors", getComputerChoice());
});

// Reset the game
const resetButton = document.getElementById("reset-game-button");
resetButton.addEventListener("click", function () {
  resetGame();
});
const playAgainButton = document.getElementById("play-again-button");
playAgainButton.addEventListener("click", function () {
  resetGame();
});
// Reset the game function

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  gameCont = 1;
  enableGameButtons();
  document.getElementById("card-name").innerText = "Player score";
  document.getElementById("card-decision-name").innerText = "Player decision";

  document.getElementById("player-score").innerText = humanScore;
  document.getElementById("computer-score").innerText = computerScore;
  document.getElementById("result-versus").innerText = "Make your choice!";
  document.getElementById("player-image-decision").src = "";
  document.getElementById("computer-image-decision").src = "";
  startButton.disabled = false;
  playerNameInput.disabled = false;
  document.querySelector(".Game-winner").style.display = "none";
}
