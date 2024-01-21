// Etiquetas HTML
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del desafio"

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Escoge un numero del 1 al 10";

// Variables
let numerosSorteados = [];
let numeroSecreto = generarNumeroSecreto(10); //Numero secreto
let intento = 0;

// Cambie el texto de una etiqueta
function cambiarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Debe verificar si el numero ingresado es igual o no al numero secreto
function intentoDeUsuario (){
    // alert("Click en el boton intentar");
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    intento++;
    //Comparacion entre los numeros
    if (numeroSecreto === numeroUsuario) {
        cambiarTextoElemento("p",`¡Felicitaciones! Acertaste el numero en ${intento} ${(intento == 1) ? "intento" : "intentos"}`);
        document.getElementById("intentarBoton").setAttribute("Disabled","true");
        document.getElementById("reiniciarBoton").removeAttribute("Disabled");
    }else 
    if (numeroSecreto > numeroUsuario) {
        cambiarTextoElemento("p","El numero secreto es mayor.");
    }
    else {
        cambiarTextoElemento("p","El nuermo secreto en menor.");
    }
    console.log(`El valor del usuario es ${numeroUsuario}`);
    limpiarCaja();
}

// Genera el numero secreto
function generarNumeroSecreto(maximo){
    let numeroGenerado = Math.floor(Math.random()*maximo) + 1;
    if (numerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }
    else {
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    console.log(numeroGenerado);
}

// Limpiar caja de numeros
function limpiarCaja(){
    let valorCaja = document.getElementById("valorUsuario");
    valorCaja.value = "";
    return;
}

function nuevoJuego (){
    numeroSecreto = generarNumeroSecreto(10);
    cambiarTextoElemento("p","Escoge un numero del 1 al 10");
    document.getElementById("intentarBoton").removeAttribute("Disabled");
    document.getElementById("reiniciarBoton").setAttribute("Disabled","true");
    intento = 0;
}

