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
            return 
        }
    }
}

console.log(getHumanChoice()); 
console.log(getComputerChoice()); 


