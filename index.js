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

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(humanChoice, computerChoice) {
    const normalizedHumanChoice = humanChoice.toLowerCase();
    const result = getRoundResult(normalizedHumanChoice, computerChoice);
    if (result === "win") {
      console.log(
        `You win! ${capitalize(normalizedHumanChoice)} beats ${computerChoice}`
      );
      ++humanScore;
      return;
    }
    if (result === "lose") {
      console.log(
        `You lose! ${capitalize(
          normalizedHumanChoice
        )} loses to ${computerChoice}`
      );
      ++computerScore;
      return;
    }
    if (result === "tie") {
      console.log(
        `You tie! ${capitalize(normalizedHumanChoice)} equals ${computerChoice}`
      );
      return;
    }
  }

  for (let i = 0; i < 5; ++i) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log(
      `You win! Your score: ${humanScore}, computer score: ${computerScore}`
    );
    return;
  }
  if (humanScore === computerScore) {
    console.log(
      `Tie! Your score: ${humanScore}, computer score: ${computerScore}`
    );
    return;
  }
  if (humanScore < computerScore) {
    console.log(
      `You lose! Your score: ${humanScore}, computer score: ${computerScore}`
    );
    return;
  }
}
