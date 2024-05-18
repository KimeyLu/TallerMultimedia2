
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


