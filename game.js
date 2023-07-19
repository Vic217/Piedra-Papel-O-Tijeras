// Función del juego
function game(){

    // Máquina escoge
    function getComputerChoice(){
        let computadoraSelec = Math.floor(Math.random () * (2 - 0 + 1) + 0);
        switch (computadoraSelec){
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

    /* Funcion para jugar */
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "Es un empate!, Realizaron la misma elección!!!";
        } else if (computerSelection === "Piedra") {
            if (playerSelection === "Tijeras") {
                return "Perdiste la piedra rompe tijeras!";
            } else {
                return "Ganaste papel envuelve a piedra!";
            }
        } else if (playerSelection === "Papel") {
            return "Perdiste tijeras cortan papel!";
        } else if (computerSelection === "Tijeras") {
            return "Ganaste piedra rompe tijeras!!";
        } else {
            if (playerSelection === "Piedra") {
                return "Perdiste el papel envuelve a la piedra!";
            } else {
                return "Ganaste tijeras cortan papel!!";
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