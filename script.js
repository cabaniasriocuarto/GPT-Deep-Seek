/*
 * Simple slider and lightbox functionality for the gallery section.
 * This script handles previous/next navigation through the gallery slides
 * and opens an overlay when an image is clicked to view it enlarged.
 */

document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const prevButton = document.querySelector('.slider .prev');
  const nextButton = document.querySelector('.slider .next');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox .close');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  let currentIndex = 0;
  const totalSlides = images.length;

  // Mobile menu toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  /**
   * Update the transform on the slides container to show the given index.
   * Uses modulo arithmetic to wrap around at either end.
   * @param {number} index
   */
  function showSlide(index) {
    if (index < 0) {
      index = totalSlides - 1;
    }
    if (index >= totalSlides) {
      index = 0;
    }
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  }

  // Event listeners for navigation buttons
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });
  }
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      showSlide(currentIndex + 1);
    });
  }

  // Open the lightbox when any image is clicked
  images.forEach((img) => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    });
  });

  // Close the lightbox when the close icon is clicked
  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
  }

  // Also close the lightbox when clicking outside the image
  if (lightbox) {
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
      }
    });
  }

  // Event tracking for WhatsApp floating button
  const whatsappFloat = document.querySelector('.whatsapp-float');
  if (whatsappFloat) {
    whatsappFloat.addEventListener('click', () => {
      // Push event to GA4 via gtag if available
      if (typeof gtag === 'function') {
        gtag('event', 'clic_whatsapp_flotante', {
          'event_category': 'Interacción',
          'event_label': 'Botón WhatsApp flotante'
        });
      }
      // Push event to GTM dataLayer
      if (window.dataLayer) {
        window.dataLayer.push({ event: 'clic_whatsapp_flotante' });
      }
    });
  }

  // Event tracking for WhatsApp button on the contact page
  const contactWhatsapp = document.querySelector('.contact-form .social-button.whatsapp');
  if (contactWhatsapp) {
    contactWhatsapp.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'clic_whatsapp_contacto', {
          'event_category': 'Interacción',
          'event_label': 'WhatsApp en contacto'
        });
      }
      if (window.dataLayer) {
        window.dataLayer.push({ event: 'clic_whatsapp_contacto' });
      }
    });
  }

  // Event tracking for form submission on the contact page
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', () => {
      // Registro de evento para GA4 y GTM
      if (typeof gtag === 'function') {
        // Evento personalizado para envío de formulario
        gtag('event', 'enviar_formulario', {
          'event_category': 'Interacción',
          'event_label': 'Formulario de contacto'
        });
        // Disparar un evento de conversión genérico que pueda asociarse a Google Ads/Analytics
        gtag('event', 'conversion', {
          'send_to': 'G-1ZEE3XF0SP',
          'event_category': 'Formulario',
          'event_label': 'Reserva completada'
        });
      }
      if (window.dataLayer) {
        window.dataLayer.push({ event: 'enviar_formulario' });
        // También enviar un evento de conversión al DataLayer para Tag Manager
        window.dataLayer.push({ event: 'conversion' });
      }
    });
  }
});

// Insertar imágenes de la carpeta images automáticamente
document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".slides");
  if (slidesContainer) {
    // Lista de imágenes para la galería basada en los nombres proporcionados
    const imageNames = [
      "quincho", "patio_nevado", "Virgen_de_Lurdes", "pileta_fuera", "pileta", "patio", 
      "apar_nevado", "portada", "habitación", "cochera", "cocina", "hermosa", "cama1_2", 
      "individuales", "Hermosa2", "calle", "asador", "calle2", "Recepción", "automovil", 
      "promo", "asadora", "pileta_quincho", "mesa_de_ping_pong", "Entrada_de_cabañas"
    ];
    
    const supportedExt = ["webp", "jpg", "jpeg"];
    let imagesFound = 0;
    
    // Función para agregar una imagen a la galería
    function addImageToGallery(name) {
      for (let ext of supportedExt) {
        const img = new Image();
        img.src = `images/${name}.${ext}`;
        img.alt = name.replace(/_/g, ' ');
        
        img.onload = function() {
          // Solo agregar si no se ha agregado ya esta imagen
          if (!document.querySelector(`.slides img[src="${img.src}"]`)) {
            slidesContainer.appendChild(img);
            imagesFound++;
            // Reiniciar el slider después de agregar imágenes
            initSlider();
          }
        };
      }
    }
    
    // Agregar todas las imágenes
    imageNames.forEach(name => {
      addImageToGallery(name);
    });
    
    // Si no se encontraron imágenes, mostrar un mensaje
    setTimeout(() => {
      if (imagesFound === 0) {
        console.warn("No se encontraron imágenes en la galería. Asegúrate de que existan en la carpeta 'images/'");
      }
    }, 1000);
  }
});

// Inicializar el slider después de cargar las imágenes
function initSlider() {
  const slidesContainer = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img, .slides video');
  const prevButton = document.querySelector('.slider .prev');
  const nextButton = document.querySelector('.slider .next');
  
  let currentIndex = 0;
  const totalSlides = images.length;
  
  function showSlide(index) {
    if (index < 0) {
      index = totalSlides - 1;
    }
    if (index >= totalSlides) {
      index = 0;
    }
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  }
  
  // Event listeners for navigation buttons
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });
  }
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      showSlide(currentIndex + 1);
    });
  }
}
