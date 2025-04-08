// Activar AOS (animaciones al hacer scroll)
AOS.init({
    duration: 800,
    once: true
  });
  
  // Modo oscuro toggle
  const toggle = document.getElementById('modoToggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
  
  // Formulario (sin backend real)
  const form = document.getElementById('contactForm');
  const alerta = document.getElementById('alerta');
  
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Simula envío
    setTimeout(() => {
      alerta.classList.remove('oculto');
      form.reset();
      setTimeout(() => {
        alerta.classList.add('oculto');
      }, 5000);
    }, 500);
  });
  