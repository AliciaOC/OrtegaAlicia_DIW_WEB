$(document).ready(function(){
    let currentIndex = 0;

    document.querySelector('.anterior').addEventListener('click', () => {
      navigate(-1);
    });

    document.querySelector('.siguiente').addEventListener('click', () => {
       navigate(1);
    });

    function navigate(direction) {
    const carrusel = document.querySelector('#carrusel');
    const totalDiapositivas = document.querySelectorAll('.diapositiva').length;

    currentIndex = (currentIndex + direction + totalDiapositivas) % totalDiapositivas;
    const offset = -currentIndex * 100;

    carrusel.style.transform = `translateX(${offset}%)`;
    }

    // Autoplay
    let autoplayInterval = null;

    function startAutoplay(interval) {
        stopAutoplay(); // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
        autoplayInterval = setInterval(() => {
            navigate(1); // Navega a la siguiente imagen cada intervalo de tiempo.
        }, interval);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Iniciar autoplay con un intervalo de 3 segundos.
    startAutoplay(3000);

    // Detener autoplay cuando el usuario interactúa con los botones de navegación.
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', stopAutoplay);
    });
});