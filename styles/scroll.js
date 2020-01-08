$(document).ready(function(){
    // Añade un desplazamiento sueva a todos los links
    $("a").on('click', function(event) {
      // Segurese de que this.hash tiene un valor antes de anular el valor por defecto
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Almacena el hash
        var hash = this.hash;
        // Se usa el método animacion "animate()"" de jQuerry para añadir un desplazamiento suave a la página
        // El número opcional (800) especifica el tiempo en milisegundos que toma hacer la animacion de desplazamiento al area especificada
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          // Añade el hash (#) a la url cuando termina de hacer el desplazamiento (comportamiento de clic por defecto)
          window.location.hash = hash;
        });
      } // End if
    });
  });