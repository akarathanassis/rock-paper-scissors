let humanScore = 0; 
let computerScore = 0; 
const HUMAN_WIN = 0; 
const COMPUTER_WIN = 1; 
const DRAW = 2; 

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

function getHumanChoice() { 
    let choice = prompt("Rock, paper or scissors?"); 
    choice = choice.toLowerCase().trim(); 

    while (choice) { 
        if (choice == "rock") { 
            return "rock"
        }
        else if (choice == "paper") { 
            return "paper"
        }
        else if (choice == "scissors") { 
            return "scissors"
        }
        else { 
            alert("Invalid input! Enter the word rock, paper or scissors!");
            choice = prompt("Rock, paper or scissors?");
            choice = choice.toLowerCase().trim(); 
        }
    }
}

function playRound(humanChoice, computerChoice) { 
    if (humanChoice == "rock") { 
        if (computerChoice == "rock") { 
            console.log("Draw!"); 
            return DRAW; 
        }
        if (computerChoice == "paper") { 
            console.log("You Lose! Paper beats Rock"); 
            return COMPUTER_WIN; 
        }
        if (computerChoice == "scissors") { 
            console.log("You Win! Rock beats Scissors")
            return HUMAN_WIN; 
        }
    }
    if (humanChoice == "paper") { 
        if (computerChoice == "rock") { 
            console.log("You Win! Paper beats Rock"); 
            return HUMAN_WIN; 
        }
        if (computerChoice == "paper") { 
            console.log("Draw!"); 
            return DRAW; 
        }
        if (computerChoice == "scissors") { 
            console.log("You Lose! Scissors beats Paper")
            return COMPUTER_WIN; 
        }
    }
    if (humanChoice == "scissors") { 
        if (computerChoice == "rock") { 
            console.log("You Lose! Rock beats Scissors"); 
            return COMPUTER_WIN; 
        }
        if (computerChoice == "paper") { 
            console.log("You Win! Scissors beats Paper"); 
            return HUMAN_WIN; 
        }
        if (computerChoice == "scissors") { 
            console.log("Draw!")
            return DRAW; 
        }
    }
}

let humanChoice = getHumanChoice(); 
let computerChoice = getComputerChoice(); 
console.log(playRound(humanChoice, computerChoice)); 


