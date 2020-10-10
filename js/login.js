//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

const form = document.getElementById('form');
//const username = document.getElementById('username').value; 
//const password = document.getElementById('password').value;


form.addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value; // Te dije que era algo simple!!
    var password = document.getElementById('password').value;// Las variables quedaban fuera de la función.
    localStorage.setItem('user',username);
    alert ("Guarde "+ username);
    location.href = 'principal.html'
});

    