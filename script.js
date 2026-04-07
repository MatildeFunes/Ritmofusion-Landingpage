// Menú hamburguesa
const toggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('nav-menu').closest('.navbar-container');

toggle.addEventListener('click', () => {
    navbar.classList.toggle('menu-abierto');
});

// Cerrar al hacer clic en un link
document.querySelectorAll('.floating-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('menu-abierto');
    });
});

//Barra de navegación(desaparece)
window.addEventListener('scroll', function() {
    // Buscamos el menú por su clase original
    const navbar = document.querySelector('.navbar-container');
    
    // Si bajamos más de 100 pixeles
    if (window.scrollY > 100) { 
        navbar.classList.add('navbar-hidden'); 
    } else {
        navbar.classList.remove('navbar-hidden'); 
    }
});

//logo desaparece
// Esperamos a que cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Buscamos el logo por su clase
    const logoGlobal = document.querySelector('.nav-logo-link');
    
    
    window.addEventListener('scroll', function() {
        // Obtenemos la posición vertical del scroll
        const scrollPos = window.scrollY;
        
        
        // Si bajamos más de 100px
        if (scrollPos > 100) {
            // Le pegamos la clase de transparencia
            logoGlobal.classList.add('scrolled');
        } else {
            // Si volvemos arriba del todo, se la quitamos
            logoGlobal.classList.remove('scrolled');
        }
    });
});

// Carrusel infinito
window.onload = function() {
    const track = document.getElementById('track');
    const items = Array.from(track.children);
    
    
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
};

//Carrusel infinito EVENTOS (videos+imagenes)
// Esperamos a que cargue la página
window.addEventListener('load', function() {
    
    // Clonado para la Galería de Eventos
    const galleryTrack = document.getElementById('galleryTrack');
    if (galleryTrack) { // Verificamos que exista el elemento
        const galleryItems = Array.from(galleryTrack.children);
        
        // Clonamos cada item y lo agregamos al final
        galleryItems.forEach(item => {
            const clone = item.cloneNode(true);
            galleryTrack.appendChild(clone);
        });
    }
});