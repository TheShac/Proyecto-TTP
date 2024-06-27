// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();

      
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
  
      // Verifica que se haya ingresado el nombre
      if (name.trim() === '') {
        alert('Por favor, ingrese su nombre.');
        return;
      }
      else{
      // Guarda el nombre en localStorage para uso futuro
      localStorage.setItem('name', name);
      
      alert("Inicio de sesión exitoso. ¡Bienvenido, cliente: " + name + "!");
      // Redirige a la página de menú
      window.location.href = "menu.html";
      }

    });
  });
  