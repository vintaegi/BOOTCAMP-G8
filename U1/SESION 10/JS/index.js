var actualizado = document.getElementById("titulo");
console.log(actualizado);

var actualizado2 =document.getElementsByClassName("titulo-principal");
console.log(actualizado2);

document.getElementById("titulo").innerHTML="HELLO";


function datos(){

    var nombres= document.getElementById("nombre").value;
    
    localStorage.setItem("textvalue", nombres); //textvalue = nombre

}


