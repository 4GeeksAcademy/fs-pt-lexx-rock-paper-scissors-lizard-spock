import "../style.css";

// Todo tu código anterior sigue igual aquí abajo...
const opciones = ["rock", "paper", "scissors", "lizard", "spock"];
// ... el resto del código
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

    if (typeof document !== "undefined") {
        document.getElementById("user-result").innerText = userChoice;
        document.getElementById("computer-result").innerText = computerChoice;
    }

    if (userChoice === computerChoice) {
        if (typeof document !== "undefined") {
            document.getElementById("game-status").innerText = "It's a draw!";
        }
        return `User choice ${userChoice}, computer choice ${computerChoice}, so, it's a draw!`;
    }

    if (rules[userChoice].includes(computerChoice)) {
        if (typeof document !== "undefined") {
            document.getElementById("game-status").innerText = "You win!";
        }
        return `User choice ${userChoice}, computer choice ${computerChoice}, so, you win`;
    } else {
        if (typeof document !== "undefined") {
            document.getElementById("game-status").innerText = "You lose!";
        }
        return `User choice ${userChoice}, computer choice ${computerChoice}, so, you lose`;
    }
};

if (typeof document !== "undefined") {
    document.getElementById("rock").addEventListener("click", () => jugar("rock"));
    document.getElementById("paper").addEventListener("click", () => jugar("paper"));
    document.getElementById("scissors").addEventListener("click", () => jugar("scissors"));
    document.getElementById("lizard").addEventListener("click", () => jugar("lizard"));
    document.getElementById("spock").addEventListener("click", () => jugar("spock"));
}
