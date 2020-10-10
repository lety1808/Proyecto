var perfil = document.getElementById("username");
var userName = localStorage.getItem('user');
console.log(userName.usuario);
perfil.innerHTML = "Bienvenido/a" + " " + userName;