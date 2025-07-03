const navbar = document.getElementById('sidebar');
const toggleButton = document.querySelector('.sidebar-toggle');
const links = document.querySelectorAll('.sidebar a');

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('close');
  toggleButton.classList.toggle('rotate'); // si quieres animar el botón
  links.forEach(link => {
    link.classList.toggle('active'); // opcional, si usas estilos para links
  });
  document.body.classList.toggle('active');

  if (navbar.classList.contains('close')) {
    toggleButton.innerHTML = '<i class="fa-solid fa-right-long"></i>';
  } else {
    toggleButton.innerHTML = '<i class="fa-solid fa-backward"></i>';
  }
});
// Añadir un evento de clic a los enlaces del sidebar