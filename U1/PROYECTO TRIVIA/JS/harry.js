var pregunta = [

    "¿Cuál de estás canciones le pertenece a Harry?",
    "¿En qué país nació Harry?",
    "¿Cuántos premios Grammy ha ganado Harry?",
    "¿Cuál es el nombre del primer disco que sacó Harry?",
    "¿Cuántos años tiene actualmente el cantante Harry?",
    "¿Cuándo es el cumpleaños de Harry?",
    "¿Qué canción canto Harry Style en los grammys 2021?" ];

 var opciones = [

    ["Driver Lincese","Stone Cold","As It Was","Complicated","Calm Down"],
    ["Reino Unido","Australia","Estados Unidos","Francia","Croacia"],
    ["1","3","7","4","0"],
    ["Happier Than Ever","Harry Styles","Blowback. The Killers","My Oasis"],
    [ "22 años","25 años","28 años","29 años","30 años"],
    [ "1 de febrero","3 de marzo","10 de abril","20 de junio","15 de agosto"],
    [ "Watermelon sugar","Number one","Fine Line","Late Night Talking","Golden","Satellite"],

];
 
var puntaje = [


    [0,0,5,0,0],
    [5,0,0,0,0],
    [5,0,0,0,0],
    [0,5,0,0,0],
    [0,0,5,0,0],
    [5,0,0,0,0],
    [5,0,0,0,0]

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