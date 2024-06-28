
// JavaScript para redirigir a la página de Pantalla de Mesas después de iniciar sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // usuario/contraseña de los meseros predefinidos
  var usuarios = {
    "mesero1": "contrasena1",
    "mesero2": "contrasena2",
    "mesero3": "contrasena3",
    "cocina" : "cocinero"
  };

  // Dentro del bloque if donde verificas el inicio de sesión exitoso
  if (usuarios[username] && usuarios[username] === password) {
  alert("Inicio de sesión exitoso. ¡Bienvenido, mesero " + username + "!");
  window.location.href = "mesas.html";
  } 
  else {
    document.getElementById('error').innerText = "Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.";
  }
});

  