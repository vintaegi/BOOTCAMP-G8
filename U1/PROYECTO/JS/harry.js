var preguntas = [
    "¿Cuál de estás canciones le pertenece a Harry?",
    "¿En qué país nació Harry?",
    "¿Cuántos premios Grammy ha ganado Harry?",
    "¿Cuál es el nombre del primer disco que sacó Harry?",
    "¿Cuántos años tiene actualmente el cantante Harry?",
    "¿Cuándo es el cumpleaños de Harry?",
    "¿Qué canción canto harry en los Grammys 2021?"
];

var opciones = [
    ["I'm Not the Only One","Somebody to Love","As It Was","Smells Like Teen Spirit", "Driver Lincese"],
    ["Reino Unido","Alemania","Estados Unidos","Italia","Fracia"]
    ["1","3","7","4","Ninguno"],
    ["Happier Than Ever","When We All Fall Asleep, Where Do We Go?","Blowback. The Killers"],
    ["30 años","29 años","22 años","28 años","32 años"],
    ["3 de marzo","1 de febrero","20 de junio","15 de agosto","29 de agosto"]
    [ "Watermelon sugar","Number one","Fine Line","Late Night Talking","Golden","Satellite"],
];

var puntaje = [
    [5,4,3,1,0],
    [5,4,2,1,0],
    [5,4,3,1,0],
    [5,4,3,1,0],
    [1,4,0,3,5],
    [1,2,2,3,5],
    [5,4,4,2,0]

]

var i=0;
function siguientePregunta(){

   document.getElementById("pregunta").innerHTML = pregunta [i];

   document.getElementById("op1"). innerHTML = opciones [i][0];
   document.getElementById("op2"). innerHTML = opciones [i][1];
   document.getElementById("op3"). innerHTML = opciones [i][2];
   document.getElementById("op4"). innerHTML = opciones [i][3];
   document.getElementById("op5"). innerHTML = opciones [i][4];
   



}
 

siguientePregunta();

var puntajeActualizado = 0;

 function actualizarPuntaje(alternativa){

     puntajeActualizado = puntaje [i][alternativa] + puntajeActualizado;

     i++;

     if(i<pregunta.length){
         siguientePregunta();

    }

    else{
        mostrarResultado();

    }
 
}

document.getElementById("op1").addEventListener("click", function(){ actualizarPuntaje(0)   });
document.getElementById("op2").addEventListener("click", function(){ actualizarPuntaje(1)   });
document.getElementById("op3").addEventListener("click", function(){ actualizarPuntaje(2)   });
document.getElementById("op4").addEventListener("click", function(){ actualizarPuntaje(3)   });
document.getElementById("op5").addEventListener("click", function(){ actualizarPuntaje(4)   });


function mostrarResultado(){

    document.getElementById("titulo").innerHTML = "RESULTADOS"
    document.getElementById("pregunta").innerHTML = "EL PUNTAJE OBTENIDO ES: " + puntajeActualizado + " PUNTOS";
    document.getElementsByClassName("opciones")[0].innerHTML = "";

}
//AÑADIENDO UNA IMAGEN:

 var imagen = document.createElement("img");
 imagen.setAttribute("src","  ")
 imagen.setAttribute("width","450");
 imagen.setAttribute("height","260");
 document.getElementsByClassName("opciones")[0]. appendChild(imagen);


