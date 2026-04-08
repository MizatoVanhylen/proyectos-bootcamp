$('.btn-favorito').click(function () {
  // 'this' se refiere al botón específico al que se le hizo clic
  const boton = $(this);

  // Alternamos la clase 'is-favorite' (definida en el CSS)
  boton.toggleClass('is-favorite');

  // Manipulación del DOM para feedback visual de texto
  if (boton.hasClass('is-favorite')) {
    boton.text('❤️ ¡En Favoritos!');
    console.log("Producto marcado como favorito");

    // Opcional: Agregar una pequeña animación de pulso al contenedor
    boton.closest('.carousel-item').css('filter', 'drop-shadow(0 10px 20px rgba(239, 83, 80, 0.3))');
  } else {
    boton.text('Agregar a Favoritos');
    console.log("Producto quitado de favoritos");

    // Restaurar el filtro original
    boton.closest('.carousel-item').css('filter', 'none');
  }
});