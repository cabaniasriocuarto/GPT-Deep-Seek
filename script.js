/*
 * General styles for the Apart Cabañas Río Cuarto site.
 * Dark theme con colores cálidos, responsive, y legible.
 */

html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  background-color: #0f0f0f;
  color: #f5f5f5;
  scroll-behavior: smooth;
  padding-top: 80px; /* espacio para barra fija */
}

/* Headings */
h1, h2, h3 {
  margin: 0;
  font-weight: 600;
}
h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

/* Navigation bar */
header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #0f0f0f;
  border-bottom: 1px solid #222;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
header nav .logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fdd835;
}
header nav .logo img {
  height: 40px;
  width: auto;
}
header nav .nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 0;
  padding: 0;
}
header nav .nav-links li a {
  color: #f5f5f5;
  text-decoration: none;
  padding: 0.5rem 0.7rem;
  font-weight: 500;
  transition: color 0.3s ease;
}
header nav .nav-links li a:hover {
  color: #fdd835;
}
header nav .nav-links li.social a {
  font-size: 1.2rem;
  padding: 0;
}
header nav .nav-links li.social a.facebook { color: #1877f2; }
header nav .nav-links li.social a.instagram { color: #c13584; }

/* Hero */
.hero {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-height: 70vh;
  padding: 0.5rem;
  background-image: url("images/portada.jpg");
  background-size: cover;
  background-position: center;
  text-align: center;
}
.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #FFC107;
  text-shadow:
    -1px -1px 0 #000,
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;
}
.hero p {
  font-size: 1.2rem;
  max-width: 870px;
  color: black;
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow:
    -1px -1px 0 white,
     1px -1px 0 white,
    -1px  1px 0 white,
     1px  1px 0 white;
}

/* Tarifas */
.tarifas {
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
.tarifas-banner {
  background-color: #fdd835;
  color: #0f0f0f;
  padding: 0.8rem 1rem;
  text-align: center;
  font-weight: 600;
  border-radius: 8px;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}
.tarifas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}
.tarifa-card {
  background-color: #1e1e1e;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.tarifa-card img.tarifa-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  margin-bottom: 1rem;
}
.tarifa-card h3 {
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  color: #fdd835;
}
.tarifa-card p {
  margin: 0.3rem 0;
  color: #ccc;
  font-size: 0.95rem;
}
.tarifa-card .precio {
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: #fdd835;
}
.tarifa-card p:not(.precio) { text-align: center; }
.tarifa-card .btn { align-self: center; }
.check-info {
  margin-top: 2rem;
  text-align: center;
  font-size: 1.1rem;
  color: #e0e0e0;
}

/* Botón */
.btn {
  display: inline-block;
  background-color: #fdd835;
  color: #0f0f0f;
  padding: 0.5rem 1.2rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;
}
.btn:hover { background-color: #fbc02d; }

/* Servicios */
.servicios {
  padding: 3rem 2rem;
  background-color: #101010;
}
.servicios-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 2rem;
  margin-top: 2rem;
}
.servicio-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #1e1e1e;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: #f5f5f5;
  font-size: 0.95rem;
}
.servicio-item i {
  color: #fdd835;
  font-size: 1.2rem;
}

/* Galería */
.galeria {
  padding: 3rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}
.slider {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
}
.slides {
  display: flex;
  transition: transform 0.5s ease;
}
.slides img {
  width: 100%;
  flex-shrink: 0;
  height: 300px;
  object-fit: cover;
  cursor: pointer;
}
.slides video {
  width: 100%;
  flex-shrink: 0;
  height: 350px;
  object-fit: cover;
  cursor: pointer;
  display: block;
  margin: 0 auto;
}
.slider button.prev,
.slider button.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 10;
}
.slider button.prev:hover,
.slider button.next:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
.slider button.prev { left: 10px; }
.slider button.next { right: 10px; }

/* Lightbox */
.lightbox {
  display: none;
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.lightbox img {
  max-width: 90%;
  max-height: 80%;
  border-radius: 8px;
}
.lightbox .close {
  position: absolute;
  top: 20px; right: 30px;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
}

/* Contacto */
.contacto {
  padding: 3rem 2rem;
  background-color: #101010;
}
.contacto .descripcion {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem auto;
  color: #ccc;
}
.contacto-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}
.contact-form {
  background-color: #1e1e1e;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
}
.social-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}
.social-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
}
.social-button i { font-size: 1rem; }
.social-button.whatsapp { background-color: #25D366; }
.social-button.facebook { background-color: #1877F2; }
.social-button.instagram { background-color: #C13584; }

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.input-group label {
  margin-bottom: 0.3rem;
  font-weight: 500;
  color: #f5f5f5;
}
.input-group input,
.input-group textarea {
  padding: 0.6rem;
  border: none;
  border-radius: 4px;
  background-color: #2a2a2a;
  color: #f5f5f5;
  font-size: 1rem;
}
.input-group input:focus,
.input-group textarea:focus {
  outline: none;
  background-color: #333;
}
.map-container {
  background-color: #1e1e1e;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
}
.map-container iframe {
  width: 100%;
  border: 0;
  border-radius: 4px;
}
.map-container .phone {
  margin-top: 1rem;
  font-size: 1rem;
  color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.map-container .phone i { color: #25D366; }

/* WhatsApp flotante */
.whatsapp-float {
  position: fixed;
  bottom: 20px; right: 20px;
  width: 60px; height: 60px;
  background-color: #25D366;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  text-decoration: none;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  transition: background-color 0.3s ease;
}
.whatsapp-float:hover { background-color: #1ebe57; }

/* Footer */
.site-footer {
  background-color: #0f0f0f;
  color: #ccc;
  padding: 2rem 1rem;
  font-size: 0.9rem;
}
.site-footer a {
  color: #66b2ff;
  text-decoration: none;
  transition: color 0.3s ease;
}
.site-footer a:hover { text-decoration: underline; }
.footer-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
}
.footer-left,
.footer-right { flex: 1 1 300px; }
.footer-logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.footer-logo-container img {
  height: 40px;
  width: auto;
}
.footer-left h4,
.footer-right h4 { color: #fdd835; margin: 0.5rem 0; }

/* Call to action */
.cta {
  padding: 4rem 2rem;
  background-color: #101010;
  text-align: center;
}
.cta h2 { font-size: 2rem; margin-bottom: 1rem; color: #fdd835; }
.cta p { font-size: 1.1rem; color: #ccc; margin-bottom: 2rem; }
.cta .btn { font-size: 1rem; }

/* === Responsive adjustments === */
@media (max-width: 768px) {
  .tarifas-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .slides img { height: 250px; }
  .contacto-container { flex-direction: column; }

  /* Menú hamburguesa */
  header nav .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px; right: 0;
    width: 100%;
    background-color: #0f0f0f;
    border-top: 1px solid #222;
    padding: 1rem 0;
