document.getElementById('year').textContent = new Date().getFullYear();

// Toggle menú mobile
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navList');

if (toggle) {
  toggle.addEventListener('click', () => {
    if (nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '10px';
    nav.style.background = 'rgba(11,8,25,0.95)';
    nav.style.position = 'absolute';
    nav.style.right = '20px';
    nav.style.top = '64px';
    nav.style.padding = '12px';
    nav.style.borderRadius = '12px';
  });
}

// Animaciones en scroll
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

faders.forEach(fader => observer.observe(fader));


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