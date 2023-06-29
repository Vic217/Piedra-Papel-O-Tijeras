/* Función para contar rondas y ver un ganador final */
function game(){

    /* Crea variable para ir contando los puntos por juego */
    let computadora = 0;
    let jugador = 0;
    let i = 0;

    /* Bucle para verificar ganadores */
    for (i = 1; i < 6; i++){

        /* Se crea variable para eleccion del usuario */
        let playerSelection = prompt("Elegir arma: ");
        
        /* Se crean variables para tener un estilo cadena */
        let primerMayuscula = playerSelection.charAt(0).toUpperCase();
        let restoCadena = playerSelection.slice(1).toLowerCase();
        
        /* Se unen las variables anteriores */
        playerSelection = primerMayuscula+restoCadena;

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

        console.log(playRound(playerSelection, computerSelection));

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
        
        if ( computadora === 3){
            i = 10;
            return "Juego terminado, la computadora es la vencedora con "+ computadora+ " juegos ganados de 5";
        } else if ( jugador === 3){
            i = 10;
            return "Juego terminado, has sido el vencedor con un total de "+ jugador+ " juegos ganados de 5";
        }
    }

    if (computadora > jugador){
        return "La computadora ganó con "+ computadora+ " juegos ganados!";
    } else{
        return "Ganaste con un total de "+ jugador+ " juegos ganados!";
    }
}

console.log(game());