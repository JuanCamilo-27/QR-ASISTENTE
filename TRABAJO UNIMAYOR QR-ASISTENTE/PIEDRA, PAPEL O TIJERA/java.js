const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "Empate!";
    } else if ((player === "rock" && computer === "scissors") ||
               (player === "paper" && computer === "rock") ||
               (player === "scissors" && computer === "paper")) {
        return "¡Ganaste!";
    } else {
        return "¡La computadora ganó!";
    }
}

function playerChoice(player) {
    const computer = computerChoice();
    const result = determineWinner(player, computer);
    document.getElementById("result").innerHTML = `Elegiste ${player}. La computadora eligió ${computer}. ${result}`;
}
