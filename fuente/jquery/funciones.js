$(document).ready(function () {
  //Menú de navegación de móvil (hamburguesa)
    $("#hamburguesa-navbar").click(function () {
      $(this).toggleClass("active");
      $("#navbar").toggleClass("active");
    });

  // Carrusel
  let diapositivas = $(".diapositiva");
  let indiceActual = 0;
  
  function mostrarDiapositiva() {
      // Ocultar todas las diapositivas
      diapositivas.hide();
      // Mostrar la diapositiva actual
      diapositivas.eq(indiceActual).show();
  }
  
  function siguienteDiapositiva() {
      indiceActual++;
      // Comprobar si hemos alcanzado el final del carrusel
      if (indiceActual >= diapositivas.length) {
          // Volver al principio del carrusel
          indiceActual = 0;
      }
      // Mostrar la diapositiva actual
      mostrarDiapositiva();
  }
  
  function anteriorDiapositiva() {
      indiceActual--;
      // Comprobar si hemos retrocedido más allá de la primera diapositiva
      if (indiceActual < 0) {
          // Ir al final del carrusel
          indiceActual = diapositivas.length - 1;
      }
      // Mostrar la diapositiva actual
      mostrarDiapositiva();
  }
  
  // Mostrar la primera diapositiva al cargar la página
  mostrarDiapositiva();
  
  // Evento click para el botón de siguiente diapositiva
  $(".siguiente").click(function() {
      siguienteDiapositiva();
  });
  
  // Evento click para el botón de diapositiva anterior
  $(".anterior").click(function() {
      anteriorDiapositiva();
  });
});
