function datos() {

    var nombres = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var dni = document.getElementById("dni").value;
    var correo = document.getElementById("correo").value;

    console.log(nombres);
    console.log(apellidos);
    console.log(edad);
    console.log(dni);
    console.log(correo);

    var mensaje = "nombres: "+nombres;
    console.log(mensaje);

    var mensaje1 = "apellidos: "+apellidos;
    console.log(mensaje1);

    //2DA FORMA DE DARLE FORMATO

    var formato = "nombres: "+nombres+"+apellidos: "+apellidos+"edad: "+edad+"dni: "+dni+"correo: "+correo;
    console.log (formato);
}