const navbar = document.getElementById('sidebar');
const toggleButton = document.querySelector('.sidebar-toggle');
const links = document.querySelectorAll('.sidebar a');

toggleButton.addEventListener('click', () => {
    // Alternar la clase 'close' en el sidebar para mostrar/ocultar
  navbar.classList.toggle('close');
    // Alternar la clase 'rotate' en el botón para animar el icono
  toggleButton.classList.toggle('rotate'); 
  
    // si quieres animar el botón
    // Alternar la clase 'active' en el body para aplicar estilos globales

  document.body.classList.toggle('active');

  if (navbar.classList.contains('close')) {
    toggleButton.innerHTML = '<i class="fa-solid fa-right-long"></i>';
  } else {
    toggleButton.innerHTML = '<i class="fa-solid fa-backward"></i>';
  }
});
// Añadir un evento de clic a los enlaces del sidebar