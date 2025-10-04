document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // Toggle menú mobile mejorado
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navList');

  if (toggle && nav) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.toggle('show');

      // Cambiar ícono del botón
      if (nav.classList.contains('show')) {
        toggle.textContent = '✕';
      } else {
        toggle.textContent = '☰';
      }
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('show');
        toggle.textContent = '☰';
      }
    });

    // Cerrar menú al hacer clic en un enlace
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('show');
        toggle.textContent = '☰';
      });
    });

    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('show')) {
        nav.classList.remove('show');
        toggle.textContent = '☰';
      }
    });
  }
});
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(f => observer.observe(f));


// Animar barras al cargar
document.addEventListener("DOMContentLoaded", () => {
  const progresses = document.querySelectorAll(".progress");
  progresses.forEach(bar => {
    const level = bar.getAttribute("data-level");
    setTimeout(() => {
      bar.style.width = level + "%";
    }, 300);
  });
});

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  formMessage.style.color = "#c084fc";
  formMessage.textContent = "📩 Enviando mensaje...";

  // Simulación de envío
  setTimeout(() => {
    formMessage.style.color = "#22c55e";
    formMessage.textContent = "✅ ¡Mensaje enviado con éxito!";
    form.reset();
  }, 2000);
});

// Navegación entre secciones
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main .section");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    // quitar activo del nav
    navLinks.forEach(nav => nav.classList.remove("active"));
    link.classList.add("active");

    // ocultar todas las secciones
    sections.forEach(sec => sec.classList.remove("active"));

    // mostrar la elegida
    const target = document.getElementById(link.dataset.section);
    if (target) {
      target.classList.add("active");

      // Scroll suave hacia la sección
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Cerrar menú móvil al cambiar de tamaño de ventana
window.addEventListener('resize', () => {
  const nav = document.getElementById('navList');
  const toggle = document.getElementById('menuToggle');

  if (window.innerWidth >= 768 && nav && nav.classList.contains('show')) {
    nav.classList.remove('show');
    toggle.textContent = '☰';
  }
});

// Smooth scrolling para todos los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Efecto de scroll en el header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(11, 8, 25, 0.95)';
    header.style.backdropFilter = 'blur(20px)';
  } else {
    header.style.background = 'rgba(11, 8, 25, 0.85)';
    header.style.backdropFilter = 'blur(12px)';
  }
});