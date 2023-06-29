/* Funcion para jugar */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Es un empate!, Realizaron la misma elección!!!";
    } else if (computerSelection === "Piedra"){
        if (playerSelection === "Tijeras") {
            return "Perdiste la piedra rompe tijeras!";
        }else {
            return "Ganaste papel envuelve a piedra!";
        }
    } else if ( playerSelection === "Papel" ){
        return "Perdiste tijeras cortan papel!";
    } else if ( computerSelection === "Tijeras" ){
        return "Ganaste piedra rompe tijeras!!";
    } else{
        if (playerSelection === "Piedra"){
            return "Perdiste el papel envuelve a la piedra!";
        } else{
            return "Ganaste tijeras cortan papel!!";
        }
    }
  }

/* Se crea función para que la computadora realice su elección */
function getComputerChoice(){

    /* Crea variable para obtener número aleatorio entre 0 y 2 incluidos */
    let numeroAleatorio = Math.floor(Math.random() * (2 - 0 + 1)+ 0);

    /* Crea un switch para obtener la eleccion de la computadora */
    switch(numeroAleatorio){
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

/* Se crea variable para eleccion del usuario */
let playerSelection = prompt("Elegir arma: ");

/* Se crean variables para tener un estilo cadena */
let primerMayuscula = playerSelection.charAt(0).toUpperCase();
let restoCadena = playerSelection.slice(1).toLowerCase();

/* Se unen las variables anteriores */
playerSelection = primerMayuscula+restoCadena;

console.log(playRound(playerSelection, computerSelection))