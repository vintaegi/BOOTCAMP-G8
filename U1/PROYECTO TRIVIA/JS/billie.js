var pregunta = [

    "¿Cuál de estás canciones le pertenece a Billie?",
    "¿En qué país nació Billie?",
    "¿Cuántos premios Grammy ha ganado Billie?",
    "¿Cuál es el nombre del primer disco que sacó Billie?",
    "¿Cuántos años tiene actualmente la cantante Billie?",
    "¿Cuándo es el cumpleaños de Billie?",
    "¿Qué canción canto Billie Eilish en los grammys 2022?"];
  
  var opciones = [
  
    ["Driver Lincese", "Stone Cold", "Ocean Eyes", "Complicated", "Masters Of War"],
    ["Reino Unido", "Australia", "Estados Unidos", "Francia", "Canadá"],
    ["1", "3", "4", "7", "0"],
    ["Happier Than Ever", "When We All Fall Asleep, Where Do We Go?", "Thinking Out Loud", "Chasing Cars", "Hey jode"],
    ["21 años", "24 años", "28 años", "29 años", "33 años"],
    ["17 de abril", "12 de octubre", "1 de noviembre", "1 de diciembre", "18 de diciembre"],
    ["I love You", "Bad Guy", "Hapier Than Ever", "Lost Couse", "Everything I Wanted"],
  
  ];
  
  var puntaje = [
  
  
    [0, 0, 5, 0, 0],
    [0, 0, 5, 0, 0],
    [0, 0, 0, 5, 0],
    [0, 5, 0, 0, 0],
    [5, 0, 0, 0, 0],
    [0, 0, 0, 0, 5],
    [0, 0, 5, 0, 0]
  
  ];
  
  
  var i = 0;
  function siguientePregunta() {
  
    document.getElementById("pregunta").innerHTML = pregunta[i];
  
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("op4").innerHTML = opciones[i][3];
    document.getElementById("op5").innerHTML = opciones[i][4];
  
  
  
  
  }
  
  
  siguientePregunta();
  
  var puntajeActualizado = 0;
  
  function actualizarPuntaje(alternativa) {
  
    puntajeActualizado = puntaje[i][alternativa] + puntajeActualizado;
  
    i++;
  
    if (i < pregunta.length) {
      siguientePregunta();
  
    }
  
    else {
      mostrarResultado();
  
    }
  
  }
  
  document.getElementById("op1").addEventListener("click", function() { actualizarPuntaje(0) });
  document.getElementById("op2").addEventListener("click", function() { actualizarPuntaje(1) });
  document.getElementById("op3").addEventListener("click", function() { actualizarPuntaje(2) });
  document.getElementById("op4").addEventListener("click", function() { actualizarPuntaje(3) });
  document.getElementById("op5").addEventListener("click", function() { actualizarPuntaje(4) });
  
  
  function mostrarResultado() {
  
    document.getElementById("titulo").innerHTML = "RESULTADOS"
    document.getElementById("pregunta").innerHTML = "EL PUNTAJE OBTENIDO ES: " + puntajeActualizado + " PUNTOS";
    document.getElementsByClassName("opciones")[0].innerHTML = "";
  
  
    //AÑADIENDO UNA IMAGEN:
  
    var imagen = document.createElement("img");
    imagen.setAttribute("src", "https://static.vecteezy.com/system/resources/thumbnails/011/153/306/small/doodle-illustration-of-head-wired-music-headphones-on-a-white-background-free-png.png")
    imagen.setAttribute("width", "350");
    imagen.setAttribute("height", "200");
    document.getElementsByClassName("opciones")[0].appendChild(imagen);
  
  }