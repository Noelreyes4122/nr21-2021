document.addEventListener('DOMContentLoaded', function() {
    // Mostrar toast para aviso de privacidad al cargar la página
    const privacyToastEl = document.getElementById('privacyToast');
    const privacyToast = new bootstrap.Toast(privacyToastEl, { delay: 5000 });
    privacyToast.show();
  
    // Toggle de Modo Oscuro con toast informativo
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    darkModeSwitch.addEventListener('change', function() {
      document.body.classList.toggle('dark', darkModeSwitch.checked);
      const darkModeToastEl = document.getElementById('darkModeToast');
      darkModeToastEl.querySelector('.toast-body').innerText = darkModeSwitch.checked ? "Modo oscuro activado" : "Modo claro activado";
      const darkModeToast = new bootstrap.Toast(darkModeToastEl, { delay: 3000 });
      darkModeToast.show();
    });
  });
  
  // Función de ejemplo para "Leer más" en Noticias
  function mostrarAlerta() {
    alert("Aquí se mostraría más información sobre la noticia.");
  }
  
  