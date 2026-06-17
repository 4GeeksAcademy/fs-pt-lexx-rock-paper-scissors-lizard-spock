const opciones = ["rock", "paper", "scissors", "lizard", "spock"];

// El mapa de reglas 
const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"]
};

const jugar = (userChoice) => {

    const computerChoice = opciones[Math.floor(Math.random() * opciones.length)];


    document.getElementById("user-result").innerText = userChoice;
    document.getElementById("computer-result").innerText = computerChoice;


    if (userChoice === computerChoice) {
        // Guardamos el texto en el HTML y hacemos el return
        document.getElementById("game-status").innerText = "It's a draw!";
        return `User choice ${userChoice}, computer choice ${computerChoice}, so, it's a draw!`;
    }

    if (rules[userChoice].includes(computerChoice)) {
        document.getElementById("game-status").innerText = "You win!";
        return `User choice ${userChoice}, computer choice ${computerChoice}, so, you win`;
    } else {
        document.getElementById("game-status").innerText = "You lose!";
        return `User choice ${userChoice}, computer choice ${computerChoice}, so, you lose`;
    }
};


document.getElementById("rock").addEventListener("click", () => jugar("rock"));
document.getElementById("paper").addEventListener("click", () => jugar("paper"));
document.getElementById("scissors").addEventListener("click", () => jugar("scissors"));
document.getElementById("lizard").addEventListener("click", () => jugar("lizard"));
document.getElementById("spock").addEventListener("click", () => jugar("spock"));
