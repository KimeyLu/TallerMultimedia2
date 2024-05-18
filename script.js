
let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    /*let dots = document.getElementsByClassName("dot");*/
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    /*for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }*/
    slides[slideIndex-1].style.display = "block";  
    /*dots[slideIndex-1].className += " active";*/
  }

  
// Obtener el modal

  var modal = document.getElementById("myModal");

  // Obtener el botón que abre el modal
  var btn = document.getElementById("openModalBtn");

  // Obtener el elemento de cierre (la 'x')
  var span = document.getElementsByClassName("close")[0];

  // Cuando el usuario hace clic en el botón, abrir el modal
  btn.onclick = function() {
    /*if (validateEmail(valor_email)) {*/
    modal.style.display = "block";
    /*}*/
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
    placeholder_nombre.innerHTML = "NOMBRE";
  } else {
    placeholder_nombre.innerHTML = valor_nombre;
  }
  if (valor_email == ""){
    placeholder_email.innerHTML = "EMAIL";

  } else {
    if (!validateEmail(valor_email)) {
      alert("Por favor, introduce una dirección de correo electrónico válida.");
      return;
    }
    placeholder_email.innerHTML = valor_email;
  }
}

function validateEmail(email) {
  // Expresión regular para validar un correo electrónico
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}