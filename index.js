const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
function playRoundWithRock() {
  playRound("rock", getComputerChoice());
  checkResults();
}
rockButton.addEventListener("click", playRoundWithRock);

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
function playRoundWithPaper() {
  playRound("paper", getComputerChoice());
  checkResults();
}
paperButton.addEventListener("click", playRoundWithPaper);

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
function playRoundWithScissors() {
  playRound("scissors", getComputerChoice());
  checkResults();
}
scissorsButton.addEventListener("click", playRoundWithScissors);

const resultsDisplay = document.createElement("div");
function log(text) {
  const textContainer = document.createElement("div");
  textContainer.append(text + "\n");
  resultsDisplay.append(textContainer);
}

document.body.append(rockButton, paperButton, scissorsButton, resultsDisplay);

function getComputerChoice() {
  const numberChoice = Math.floor(Math.random() * 3);
  switch (numberChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt(
    'Enter "rock", "paper", or "scissors" (without the quotes)'
  );
  return humanChoice;
}

function getRoundResult(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          return "tie";
        case "paper":
          return "lose";
        case "scissors":
          return "win";
      }
      throw new Error("Invalid");
    case "paper":
      switch (computerChoice) {
        case "rock":
          return "win";
        case "paper":
          return "tie";
        case "scissors":
          return "lose";
      }
      throw new Error("Invalid");
    case "scissors":
      switch (computerChoice) {
        case "rock":
          return "lose";
        case "paper":
          return "win";
        case "scissors":
          return "tie";
      }
      throw new Error("Invalid");
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  const normalizedHumanChoice = humanChoice.toLowerCase();
  const result = getRoundResult(normalizedHumanChoice, computerChoice);
  if (result === "win") {
    log(
      `You win! ${capitalize(normalizedHumanChoice)} beats ${computerChoice}`
    );
    ++humanScore;
    return;
  }
  if (result === "lose") {
    log(
      `You lose! ${capitalize(
        normalizedHumanChoice
      )} loses to ${computerChoice}`
    );
    ++computerScore;
    return;
  }
  if (result === "tie") {
    log(
      `You tie! ${capitalize(normalizedHumanChoice)} equals ${computerChoice}`
    );
    return;
  }
}

function checkResults() {
  if (humanScore < 5 && computerScore < 5) {
    return;
  }

  if (humanScore > computerScore) {
    log(`You win! Your score: ${humanScore}, computer score: ${computerScore}`);
    return;
  }
  if (humanScore === computerScore) {
    log(`Tie! Your score: ${humanScore}, computer score: ${computerScore}`);
    return;
  }
  if (humanScore < computerScore) {
    log(
      `You lose! Your score: ${humanScore}, computer score: ${computerScore}`
    );
    return;
  }
}
