var perfil = document.getElementById("username");
var userName = localStorage.getItem('users');
console.log(userName.usuario);
perfil.innerHTML = "Bienvenido/a" + " " + JSON.stringify(userName[0].usuario);