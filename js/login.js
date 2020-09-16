//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let users = Array (
        {
            usuario: username.value,
            contraseña: password.value
        }
    );
    localStorage.setItem('users',JSON.stringify(users));
    location.href = 'principal.html'
});

    //function guardar(dato, pass){  

      //  if (dato.trim()==="" || pass.trim()===""){ //Chequea que el dato recibido no esté vacío. 
        //El método trim elimina los espacios en blanco al inicio y al final del mismo.
        //    alert("El dato está vacío");
        //}    else{
        //localStorage.setItem("usuario", dato.trim()); //setItem almacena el dato en la posición "usuario"
        //localStorage.setItem("password", pass.trim()); // Almaceno la contraseña
        //sessionStorage.setItem("usuario", dato.trim());
        //alert (" Usuario : " + dato + " Password : " + pass ); 
        
       
      //  location.href="next.html";
        
        //getItem obtiene el dato almacenado en la posición "usuario"
       
       // }
   // }



        //document.getElementById("button").addEventListener('click', function(e) {
        //let email = document.getElementById("username");
        //let contraseña = document.getElementById("password");
        //let validacion = true;
        //if(username.value === "" ||password.value === "") {
         //   alert("Debe completar el usuario y la contraseña");
           // validacion = false; }
            //if(validacion) {
           //     location.href = 'principal.html';
            //}
        //});