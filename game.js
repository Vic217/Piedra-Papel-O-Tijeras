/* Funcion para jugar */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Es un empate!, Realizaron la misma elección!!!")
    } else if (computerSelection === "Piedra"){
        if (playerSelection === "Tijeras") {
            console.log("Perdiste la piedra rompe tijeras!");
        }else {
            console.log("Ganaste papel envuelve a piedra!");
        }
    } else if ( playerSelection === "Papel" ){
        console.log("Perdiste tijeras cortan papel!")
    } else if ( computerSelection === "Tijeras" ){
        console.log("Ganaste piedra rompe tijeras!!")
    } else{
        if (playerSelection === "Piedra"){
            console.log("Perdiste el papel envuelve a la piedra!")
        } else{
            console.log("Ganaste tijeras cortan papel!!")
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
let primerMayuscula = jugador.charAt(0).toUpperCase();
let restoCadena = jugador.slice(1).toLowerCase();

/* Se unen las variables anteriores */
playerSelection = primerMayuscula+restoCadena;