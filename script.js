        // Seleccionar el botón
        var boton = document.getElementById('boton');
        // Seleccionar la sección de destino
        var seccionDestino = document.getElementById('seccionDestino');
        
        // Añadir un evento de clic al botón
        boton.addEventListener('click', function() {
            // Desplazarse suavemente hacia la sección de destino
            seccionDestino.scrollIntoView({ behavior: 'smooth' });
        });


// Obtener el modal
  var modal = document.getElementById("myModal");

  // Obtener el botón que abre el modal
  var btn = document.getElementById("openModalBtn");

  // Obtener el elemento de cierre (la 'x')
  var span = document.getElementsByClassName("close")[0];

  // Cuando el usuario hace clic en el botón, abrir el modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // Cuando el usuario hace clic en la 'x', cerrar el modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Cuando el usuario hace clic fuera del modal, cerrarlo
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  
  /*formulario */
var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("email");

btn.addEventListener("click", enviarForm);

function enviarForm(event) {
  event.preventDefault();

  var valor_nombre = input_nombre.value;
  var valor_email = input_email.value;

  var placeholder_nombre = document.getElementById("nombre-placeholder");
  var placeholder_email = document.getElementById("email-placeholder");

  if (valor_nombre == ""){
    modal.style.display = "none";
    alert("Por favor, rellena el formulario.");
    return;
  } else {
    placeholder_nombre.innerHTML = valor_nombre;
  }
  if (valor_email == "" || !validateEmail(valor_email)){
    modal.style.display = "none";
    alert("Por favor, introduce una dirección de correo electrónico válida.");
    return;
  } else {
    placeholder_email.innerHTML = valor_email;
  }
}

function validateEmail(email) {
  // Expresión regular para validar un correo electrónico
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

