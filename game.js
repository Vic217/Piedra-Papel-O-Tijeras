// Función del juego
function game() {

    // Crea variable para ir contando los puntos por juego
    let computadora = 0;
    let jugador = 0;
    let i = 0;

    // Máquina escoge
    function getComputerChoice() {
        let computadoraSelec = Math.floor(Math.random() * (2 - 0 + 1) + 0);
        switch (computadoraSelec) {
            case 0:
                return "Piedra"
            case 1:
                return "Papel"
            case 2:
                return "Tijeras"
        }
    }

    // Eleccion de máquina
    const computerSelection = getComputerChoice();

    // Funcion para jugar
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            const res = document.getElementById("resultado");
            return res.innerText = "Es un empate!, Realizaron la misma elección!!!";
        } else if (computerSelection === "Piedra") {
            if (playerSelection === "Tijeras") {
                const res = document.getElementById("resultado");
                return res.innerText = "Perdiste la piedra rompe tijeras!";
            } else {
                const res = document.getElementById("resultado");
                return res.innerText = "Ganaste papel envuelve a piedra!";
            }
        } else if (playerSelection === "Papel") {
            const res = document.getElementById("resultado");
            return res.innerText = "Perdiste tijeras cortan papel!";
        } else if (computerSelection === "Tijeras") {
            const res = document.getElementById("resultado");
            return res.innerText = "Ganaste piedra rompe tijeras!!";
        } else {
            if (playerSelection === "Piedra") {
                const res = document.getElementById("resultado");
                return res.innerText = "Perdiste el papel envuelve a la piedra!";
            } else {
                const res = document.getElementById("resultado");
                return res.innerText = "Ganaste tijeras cortan papel!!";
            }
        }
    }

    // Elección del jugador
    const armas = document.getElementsByClassName("arma");
    for (const elec of armas) {
        elec.addEventListener("click", (e) => {
            const playerSelection = e.target.innerText;
            // Llamada a comparaciones del juego
            console.log(playRound(playerSelection, computerSelection));
        });
    }
}

// Llamada al juego
game();