//cargo en un arreglo las imganes de las derivadas. Este sera el orden que se mostrarán
let derivadas = ["pa.JPG", "bo.JPG", "ad.JPG", "gb.JPG", "na.JPG"];

//arreglo que guardara la opcion correcta
let correcta = [2,2,1,1,0];

//arreglo que guardara las opciones a mostrar en cada jugada
let opciones = [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["dy/dx= 9x+2", "dy/dx= 2x-2", "dy/dx= 6x-2"]);
opciones.push(["dy/dx=52xʌ2+2x+3", "dy/dx=22xʌ7+25x+5", "dy/dx=24xʌ2+24x+6"]);
opciones.push(["8ln(7).2ʌ3x+2", "2ln(5).5ʌ2x+1", "8ln(2).2x+6"]);
opciones.push(["2cosʌ6(x).-sen(x)", "dy/dx= 4cosʌ3(x).-sen(x)", "2cosʌ2(x).+sen(x)"]);
opciones.push(["secʌ2(x)", "secʌ7(x5)", "secʌ4(x2)"]);

//variable que guarda la posicion actual
let posActual = 0;
//variable que guarda la cantidad acertadas hasta el moemento
let cantidadAcertadas = 0;

function comenzarJuego(){
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarderivadas();

}

//funcion que carga la siguiente derivada y sus opciones
function cargarderivadas(){
    //controlo sis se acabaron las derivada
    if(derivadas.length <= posActual){
        terminarJuego();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imgBandera").src = "img/" + derivadas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        //agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{//no acerto
        //agramos las clases para colocar en rojo la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //Esperamos 1 segundo y pasamos mostrar la siguiente derivada y sus opciones
    setTimeout(cargarderivadas,1000);
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = derivadas.length - cantidadAcertadas;
}

function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}