// var audio = document.getElementById("musica");

// function reproduccion(){


//     audio.play();
// }

let sonido = new Audio("./audios/Ghosting.mp3"); 

reproducir.addEventListener("click",function(){

    sonido.volume = 0.4;
    sonido.playbackRate = 1;
    sonido.loop = true;
    sonido.play();
})

pausar.addEventListener("click",function(){

    sonido.pause();
})

parar.addEventListener("click",function(){
    sonido.pause();
    sonido.currentTime = 0;
})

function datos(){

    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var fecha = document.getElementById("fecha").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("Telefono").value;
    var distrito = document.getElementById("distrito").value;
    var mascota = document.getElementById("mascota").value;
}