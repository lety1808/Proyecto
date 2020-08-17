//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.getElementById("button").addEventListener('click', function(e) {
    let email = document.getElementById("username");
    let contraseña = document.getElementById("password");
    let validacion = true;
    if(username.value === "" ||password.value === "") {
        alert("Debe completar el usuario y la contraseña");
        validacion = false; }
        if(validacion) {
            location.href = 'principal.html';
        }
    });