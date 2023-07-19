/* Función para contar rondas y ver un ganador final */
function game(){

    /* Crea variable para ir contando los puntos por juego
    let computadora = 0;
    let jugador = 0;
    let i = 0;*/

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

    /* Crea variable para la eleccion de computadora */
    const computerSelection = getComputerChoice();

    const armas = document.getElementsByClassName("arma");

    for (let arma of armas){
        console.log(arma);
        arma.addEventListener("click", (e) => {
            console.log(e.target.innerText);
        });
    }

    /* Funcion para jugar */
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "Es un empate!, Realizaron la misma elección!!!";
        } else if (computerSelection === "Piedra"){
            if (playerSelection === "Tijeras") {
                computadora += 1;
                return "Perdiste la piedra rompe tijeras!";
            }else {
                jugador += 1;
                return "Ganaste papel envuelve a piedra!";
            }
        } else if ( playerSelection === "Papel" ){
            computadora += 1;
            return "Perdiste tijeras cortan papel!";
        } else if ( computerSelection === "Tijeras" ){
            jugador += 1;
            return "Ganaste piedra rompe tijeras!!";
        } else{
            if (playerSelection === "Piedra"){
                computadora += 1;
                return "Perdiste el papel envuelve a la piedra!";
            } else{
                jugador += 1;
                return "Ganaste tijeras cortan papel!!";
            }
        }
    }
}
console.log(game());