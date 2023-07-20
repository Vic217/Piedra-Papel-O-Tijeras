// Función del juego
function game() {

    // Crea variable para ir contando los puntos por juego
    let computadora = 0;
    let jugador = 0;

    // Funcion para jugar cada round
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            const puntajeJugador = document.getElementById("contadorJugador");
            puntajeJugador.innerText = "Jugador " + jugador + " puntos";

            const puntajeComputadora = document.getElementById("contadorMaquina");
            puntajeComputadora.innerText = "Maquina " + computadora + " puntos";

            const res = document.getElementById("resultado");
            return res.innerText = "Es un empate!, Realizaron la misma elección!!!";
        } else if (computerSelection === "Piedra") {
            if (playerSelection === "Tijeras") {
                computadora += 1;
                const puntajeJugador = document.getElementById("contadorJugador");
                puntajeJugador.innerText = "Jugador " + jugador + " puntos";
                
                const puntajeComputadora = document.getElementById("contadorMaquina");
                puntajeComputadora.innerText = "Maquina " + computadora + " puntos";
                const res = document.getElementById("resultado");
                return res.innerText = "Perdiste la piedra rompe tijeras!";
            } else {
                jugador += 1;
                const puntajeJugador = document.getElementById("contadorJugador");
                puntajeJugador.innerText = "Jugador " + jugador + " puntos";
                
                const puntajeComputadora = document.getElementById("contadorMaquina");
                puntajeComputadora.innerText = "Maquina " + computadora + " puntos";
                const res = document.getElementById("resultado");
                return res.innerText = "Ganaste papel envuelve a piedra!";
            }
        } else if (playerSelection === "Papel") {
            computadora += 1;
            const puntajeJugador = document.getElementById("contadorJugador");
            puntajeJugador.innerText = "Jugador " + jugador + " puntos";
            
            const puntajeComputadora = document.getElementById("contadorMaquina");
            puntajeComputadora.innerText = "Maquina " + computadora + " puntos";
            const res = document.getElementById("resultado");
            return res.innerText = "Perdiste tijeras cortan papel!";
        } else if (computerSelection === "Tijeras") {
            jugador += 1;
            const puntajeJugador = document.getElementById("contadorJugador");
            puntajeJugador.innerText = "Jugador " + jugador + " puntos";
            
            const puntajeComputadora = document.getElementById("contadorMaquina");
            puntajeComputadora.innerText = "Maquina " + computadora + " puntos";
            const res = document.getElementById("resultado");
            return res.innerText = "Ganaste piedra rompe tijeras!!";
        } else {
            if (playerSelection === "Piedra") {
                computadora += 1;
                const puntajeJugador = document.getElementById("contadorJugador");
                puntajeJugador.innerText = "Jugador " + jugador + " puntos";
                
                const puntajeComputadora = document.getElementById("contadorMaquina");
                puntajeComputadora.innerText = "Maquina " + computadora + " puntos";
                const res = document.getElementById("resultado");
                return res.innerText = "Perdiste el papel envuelve a la piedra!";
            } else {
                jugador += 1;
                const puntajeJugador = document.getElementById("contadorJugador");
                puntajeJugador.innerText = "Jugador " + jugador + " puntos";
                
                const puntajeComputadora = document.getElementById("contadorMaquina");
                puntajeComputadora.innerText = "Maquina " + computadora + " puntos";
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
            
            if(computadora > 4){
                const res = document.getElementById("resultado");
                return res.innerText = "Juego terminado, la computadora a ganado con " + computadora + " puntos";
            } else if(jugador > 4){
                const res = document.getElementById("resultado");
                return res.innerText = "Felicidades has ganado!!, llegaste a los " + jugador + " puntos";
            } else{
                // Llamada a comparaciones del juego
                console.log(playRound(playerSelection, computerSelection));
            }
        });
    }
}

// Llamada al juego
game();