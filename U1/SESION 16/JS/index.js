var diasSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sàbado","Domingo"];
console.log(diasSemana.length);
console.log(diasSemana[2]);

let juegos = ["Minecraft","roblox","fifa","MarioBros","valorant","LOL"];
console.log(juegos.length);
console.log(juegos[5]);

var preguntas = ["¿Cuál es tu color favorito?","¿Cuál es tu deporte favorito?"];

var opciones = [["Morado","Verde","Azul","Rojo"] , ["Baseball","Voley","Tennis"] ];

var puntaje = [[5,0,0,0] , [0,5,0]];

document.getElementById("opcion1").addEventListener("click", function() {

    console.log("El usuario le hizo click al botón");
} );