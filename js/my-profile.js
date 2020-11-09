//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


var loadFile = function (evento) {
	var image = document.getElementById ('salida');
	image.src = URL.createObjectURL (event.target.files [0]);
};


function guardarDatos(){
    var datos = {};
    datos.file = document.getElementById("file").value;
    datos.nombre = document.getElementById("nombre").value;
    datos.apellido = document.getElementById("apellido").value;
    datos.fechaNac = document.getElementById("fechaNac").value;
    datos.email = document.getElementById("email").value;
    datos.telefono = document.getElementById("telefono").value;
    datos.contraseña = document.getElementById("contraseña").value;
    localStorage.setItem("perfil", JSON.stringify(datos)); //almacena el objeto Javascript como una cadena
};



mostrarDatos()

function mostrarDatos(){

    let datos2 = localStorage.getItem("perfil");
    datos = JSON.parse(datos2);

     if (datos !=null){

    //document.getElementById("file").value = datos.file;
    document.getElementById("nombre").value = datos.nombre;
    document.getElementById("apellido").value = datos.apellido;
    document.getElementById("fechaNac").value = datos.fechaNac;
    document.getElementById("email").value = datos.email;
    document.getElementById("telefono").value = datos.telefono;
    document.getElementById("contraseña").value = datos.contraseña;
     
    } else {
        console.log("No se han guardado datos")
    }
}








