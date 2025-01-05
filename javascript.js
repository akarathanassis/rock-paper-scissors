console.log("Hello World")

function getComputerChoice() { 
    let value = Math.random(); 

    if (value <= 0.33) { 
        return "rock"
    }
    else if (value >= 0.33 && value <= 0.67) { 
        return "paper"
    }
    else { 
        return "scissors"
    }
}

console.log(getComputerChoice())


