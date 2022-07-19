const arrStr = ['rock','paper','scissors']
const randElement = arrStr[Math.floor(Math.random() * arrStr.length)];
console.log(randElement);

let winner = "";
let round = 0;
let playerScore = 0;
let computerScore = 0;
let roundTotals = "";

const checkForValidInput = (playerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
      case 'rock':
      case 'paper':
      case 'scissors':
        return true;
        break;
      default:
        return false;
    };
  }

function playRound (playerSelection, computerSelection) {
    let result = "";

    if (playerSelection == computerSelection) {
        result = "It's a tie!";
    }

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = "You win! Rock beats scissors.";
        playerScore++;
    }

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        result = "You lose! Paper beats rock.";
        computerScore++;
    }

    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result = "You lose! Scissors beat paper.";
        computerScore++;
    }

    if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = "You win! Paper beats rock.";
        playerScore++;
    }

    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result = "You lose! Rock beats scissors.";
        computerScore++;
    }

    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = "You win! Scissors beat paper.";
        playerScore++;
    }

    round++;
    return result;
}

function playGame () {
    let playerSelection = prompt ("Choose rock, paper, or scissors:");
    while (checkForValidInput(playerSelection) == false) {
        playerSelection = prompt('Invalid response! Choose rock, paper, or scissors.')
      };
    const computerSelection = randElement;
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Round ${round} complete. YOU: ${playerScore}, COMPUTER: ${computerScore}`);
}

for (let round = 0; round < 5; round++) {
    playGame ();
}

if (playerScore > computerScore) {
    console.log (`You are the champion! You defeated the computer ${playerScore} to ${computerScore}.`)
}
if (playerScore == computerScore) {
    console.log (`It is a tie! ${playerScore} to ${computerScore}.`)
}
if (playerScore < computerScore) {
    console.log (`The computer has defeated you ${computerScore} to ${playerScore}! Better luck next time!`)
}