/* Funcion para jugar */
function playRound(playerSelection, computerSelection) {
    // your code here!
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