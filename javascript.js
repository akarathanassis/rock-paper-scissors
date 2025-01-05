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

    choice = choice.toLowerCase; 
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
        }
    }
}

let humanChoice = getHumanChoice(); 
console.log(getComputerChoice())


