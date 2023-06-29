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

/* Se crea función para que el jugador elija su arma */
function playerSelection(){

    /* Crea variable para eleccion de jugador */
    let jugador = prompt("Elija cual es el arma que utilizará: \n a) Piedra \n b) Papel \n c) Tijeras")
}