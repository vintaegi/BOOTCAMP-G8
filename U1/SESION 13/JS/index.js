//APRENDIENDO STRINGS : CADENAS, TEXTOS, MENSAJES, PALABRAS

var mensaje= 'hola mundo';
console.log(mensaje);
console.log(typeof (mensaje));

console.log("hola" + "mundo");

//OPERACIÓN : CONCATENAR STRING 

console.log("hola"+" mundo")

//OPERACIÓN : RESPETICION STRING (MÁS ELEMENTOS)

console.log("hola"+" hola"+" hola");

//METODO RÁPIDO PARA REPETIR STRING

var texto="como estas ";

console.log(texto.repeat(5));

//HALLANDO EL TAMAÑO DE UN STRING

var tamaño= "HOLA COMO ESTÁS";
console.log(tamaño.length);

//PASANDO STRNIGS A MINUSCULAS

var saludo = "FELIZ CUMPLEAÑOS";
console.log(saludo.toLowerCase());

//PASANDO STRING A MAYUSCULA

var saludo1 = "feliz dia";
console.log(saludo1.toUpperCase());

//POSICIONES DE UN STRING (0.....)

var ayuda = "HOLA";
console.log(ayuda.length); //length -> nos ayuda a saber el tamaño de algo
console.log(ayuda.indexOf("A")); //indexof -> nos ayuda a saber la posicion de algo

//PROBANDO CONSOLE.ASSERT

console.assert("hola" === "HOLA");

//IBSERTANDO SALTOS DE LINEA EN STRING


console.log("HOLA \nMUNDO \nESTOY \nPROGRAMANDO");