var pregunta = [
    "¿Cuál de estás canciones le pertenece a Selena?",
    "¿En qué país nació Selena?",
    "¿Cuántos premios Grammy ha ganado Selena?",
    "¿Cuál es el nombre del primer disco que sacó Selena?",
    "¿Cuántos años tiene actualmente la cantante Selena?",
    "¿Cuándo es el cumpleaños de Selena?",
    "¿Qué canción canto Selena Gomez en los grammys 2022?"];

var opciones = [

    [ "The Heart Wants What It Wants ","My future","Nobody's Love","Easy","Tell Me Something I Don't Know "  ],
    ["Estados Unidos-Texas","Reino Unido","Australia","Francia","Canadá" ],
    ["5","3","6","2","0"],
    ["Naturally","Another Cinderella Story","Snail","The Machine","Daisies"],
    [ "26 años","28 años","29 años","30 años","32 años"],
    ["8 de enero","2 de febrero","18 de marzo","22 de julio","6 de diciembre"],
    ["Feel Me","A Year Without Rain","Ninfuna","Sober","Ninguna"],

];

var puntaje = [


    [5,0,0,0,0],
    [5,0,0,0,0],
    [0,0,0,5,0],
    [0,5,0,0,0],
    [0,0,0,5,0],
    [0,0,0,5,0],
    [0,0,0,0,5]

];      


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


//AÑADIENDO UNA IMAGEN:

 var imagen = document.createElement("img");
 imagen.setAttribute("src", "https://static.vecteezy.com/system/resources/thumbnails/011/153/306/small/doodle-illustration-of-head-wired-music-headphones-on-a-white-background-free-png.png")
  imagen.setAttribute("width", "350");
  imagen.setAttribute("height", "200");
 document.getElementsByClassName("opciones")[0]. appendChild(imagen);

}  