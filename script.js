/*
 * Funcionalidades principales:
 * - Menú hamburguesa
 * - Slider de galería (con video y fotos)
 * - Lightbox para ampliar imágenes
 * - Tracking de eventos (WhatsApp, formulario)
 * - Inserción automática de imágenes en galería
 */

document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.querySelector('.slides');
  const prevButton = document.querySelector('.slider .prev');
  const nextButton = document.querySelector('.slider .next');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox .close');

  let currentIndex = 0;
  let images; // se actualizará al cargar

  // --- MENÚ HAMBURGUESA ---
  const menuIcon = document.getElementById('menu-icon');
  const nav = document.querySelector('header nav');
  if (menuIcon && nav) {
    menuIcon.addEventListener('click', () => {
      nav.classList.toggle('open');
      const icon = menuIcon.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    });
  }

  // --- FUNCIÓN SLIDER ---
  function showSlide(index) {
    if (!images || images.length === 0) return;
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  }

  // Botones de navegación
  if (prevButton) {
    prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
  }
  if (nextButton) {
    nextButton.addEventListener('click', () => showSlide(currentIndex + 1));
  }

  // --- LIGHTBOX ---
  function initLightbox() {
    if (!images) return;
    images.forEach((img, index) => {
      img.addEventListener('click', () => {
        if (img.tagName.toLowerCase() === 'img') {
          lightbox.style.display = 'flex';
          lightboxImg.src = img.src;
          currentIndex = index;
          document.body.style.overflow = 'hidden';
        }
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
      });
    }

    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
          lightbox.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      });
    }
  }

  // --- TRACKING ---
  const whatsappFloat = document.querySelector('.whatsapp-float');
  if (whatsappFloat) {
    whatsappFloat.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'clic_whatsapp_flotante', { event_category: 'Interacción', event_label: 'Botón WhatsApp flotante' });
      }
      if (window.dataLayer) window.dataLayer.push({ event: 'clic_whatsapp_flotante' });
    });
  }

  const contactWhatsapp = document.querySelector('.contact-form .social-button.whatsapp');
  if (contactWhatsapp) {
    contactWhatsapp.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'clic_whatsapp_contacto', { event_category: 'Interacción', event_label: 'WhatsApp en contacto' });
      }
      if (window.dataLayer) window.dataLayer.push({ event: 'clic_whatsapp_contacto' });
    });
  }

  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'enviar_formulario', { event_category: 'Interacción', event_label: 'Formulario de contacto' });
        gtag('event', 'conversion', { send_to: 'G-1ZEE3XF0SP', event_category: 'Formulario', event_label: 'Reserva completada' });
      }
      if (window.dataLayer) {
        window.dataLayer.push({ event: 'enviar_formulario' });
        window.dataLayer.push({ event: 'conversion' });
      }
    });
  }

  // --- INSERTAR IMÁGENES ---
  const imageNames = [
    "0", "1", "1-plaza", "2", "2_plazas", "3", "4", "5", "6", "7", "8", "9",
    "10", "11", "12", "13", "14", "frentecabana", "image4", "image5", "image6",
    "image7", "image11", "image14", "image18", "image20", "image21", "image24",
    "images21", "images22", "mami", "pileta", "pileta2", "pingpong", "portada",
    "quincho_chico", "unnamed"
  ];

  const supportedExt = ["webp", "jpg", "jpeg"];
  if (slidesContainer) {
    imageNames.forEach(name => {
      supportedExt.forEach(ext => {
        const img = new Image();
        img.src = `images/${name}.${ext}`;
        img.alt = name.replace(/_/g, ' ');
        img.onload = () => {
          if (!slidesContainer.querySelector(`img[src="${img.src}"]`)) {
            slidesContainer.appendChild(img);
            images = document.querySelectorAll('.slides img, .slides video');
            initLightbox();
          }
        };
      });
    });
  }
});
