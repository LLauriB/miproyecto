let intentos = 6;
let lista= ["CABRA", "CLAVO", "DADOS", "GAFAS", "HIELO", "MELON", "NUBES",
            "PERRO", "RELOJ", "SELVA", "TABLA", "TACOS", "TENIS", "TALON", 
            "VERDE", "CORAL", "RATON", "CAJON", "JOYAS", "PLAYA", "RALLY"];

          
 let posicion = Math.floor(Math.random() * lista.length);

 let palabra = lista [posicion];

const INPUT = document. getElementById("guess-input");
const BOTON = document.getElementById("guess-button");
console.log(BOTON);

BOTON.addEventListener("click", intentar);


function intentar(){
    const intento = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className= "row";

     intentos = intentos - 1;
        console.log("te quedan", intentos, "intentos")
        for (i in palabra){
            const SPAN = document.createElement("span");
            SPAN.className = "letter";
            SPAN.innerHTML = intento[i];
        if (intento[i]===palabra[i]){
            console.log(intento[i], "verde");
            SPAN.style.backgroundColor = "#66FFCC";
        }else if (palabra.includes(intento[i])){
            console.log(intento[i], "amarillo");
            SPAN.style.backgroundColor = "#FFFF99";
        }else{
            console.log(intento[i], "gris");
            SPAN.style.backgroundColor = "#9c9c9c";
        }
        ROW.appendChild(SPAN);
    }

    GRID.appendChild(ROW);
    if(palabra===intento){
        terminar("<h1>GANASTE!</h1");
    }

    if (intentos ===0){
        terminar("<h1>PERDISTE</h1");
    }
}
    function leerIntento(){
        return INPUT. value. toUpperCase();
    }

    function terminar(mensaje){
        let estado = document.getElementById("guesses");
        INPUT.disabled = true; 
        BOTON.disabled = true;
        estado.innerHTML = mensaje;
        console.log(estado, mensaje);
    }




