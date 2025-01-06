const HUMAN_WIN = 0; 
const COMPUTER_WIN = 1; 
const DRAW = 2; 

const buttons = document.querySelectorAll("button"); 
buttons.forEach((button) => { 
    button.addEventListener("click", () => {
        playRound(getHumanChoice(button.id), getComputerChoice()); 
    }); 
}); 

const outcome = document.querySelector(".outcome"); 

function getComputerChoice() { 
    let value = Math.random(); 

    if (value <= 0.33) { 
        return "rock"
    }
    else if (value > 0.33 && value <= 0.67) { 
        return "paper"
    }
    else { 
        return "scissors"
    }
}

function getHumanChoice(humanChoice) { 
    return humanChoice
}

function playRound(humanChoice, computerChoice) { 
    if (humanChoice == "rock") { 
        if (computerChoice == "rock") { 
            outcome.textContent = "Draw!"; 
            return DRAW; 
        }
        if (computerChoice == "paper") { 
            outcome.textContent = "You Lose! Paper beats Rock"; 
            return COMPUTER_WIN; 
        }
        if (computerChoice == "scissors") { 
            outcome.textContent = "You Win! Rock beats Scissors"; 
            return HUMAN_WIN; 
        }
    }
    if (humanChoice == "paper") { 
        if (computerChoice == "rock") { 
            outcome.textContent = "You Win! Paper beats Rock";
            return HUMAN_WIN; 
        }
        if (computerChoice == "paper") { 
            outcome.textContent = "Draw!"; 
            return DRAW; 
        }
        if (computerChoice == "scissors") { 
            outcome.textContent = "You Lose! Scissors beats Paper!";
            return COMPUTER_WIN; 
        }
    }
    if (humanChoice == "scissors") { 
        if (computerChoice == "rock") { 
            outcome.textContent = "You Lose! Rock beats Scissors!"; 
            return COMPUTER_WIN; 
        }
        if (computerChoice == "paper") { 
            outcome.textContent = "You Win! Scissors beats Paper"; 
            return HUMAN_WIN; 
        }
        if (computerChoice == "scissors") { 
            outcome.textContent = "Draw!"; 
            return DRAW; 
        }
    }
}

playRound(getHumanChoice(), getComputerChoice()); 

// function playGame() { 
//     let humanScore = 0; 
//     let computerScore = 0; 

//     for (let i = 0; i < 5; i++) { 
//         let humanChoice = getHumanChoice(); 
//         let computerChoice = getComputerChoice(); 
//         let result = playRound(humanChoice, computerChoice); 
//         if (result == DRAW) { 
//             continue; 
//         }
//         if (result == HUMAN_WIN) { 
//             humanScore++; 
//         }
//         if (result == COMPUTER_WIN) { 
//             computerScore++; 
//         }
//     }
    
//     // return outcome of the game 
//     if (humanScore > computerScore) { 
//         return `You Win! ${humanScore} to ${computerScore}`
//     }
//     else if (humanScore < computerScore) { 
//         return `You Lose! ${humanScore} to ${computerScore}` 
//     }
//     else { 
//         return `Draw! ${humanScore} to ${computerScore}`
//     }
// }

// console.log(playGame()); 
// let humanChoice = getHumanChoice(); 
// let computerChoice = getComputerChoice(); 
// console.log(playRound(humanChoice, computerChoice)); 


