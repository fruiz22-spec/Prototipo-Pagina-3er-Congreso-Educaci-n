document.addEventListener('DOMContentLoaded', function() {
    // Código para el botón Back to Top
    const backToTopButton = document.getElementById('back-to-top');

    // Muestra u oculta el botón basado en el scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Función para el scroll suave al hacer clic
    backToTopButton.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del enlace
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
