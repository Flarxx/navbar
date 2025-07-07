const navbar = document.getElementById('sidebar');
const toggleButton = document.querySelector('.sidebar-toggle');
const links = document.querySelectorAll('.sidebar a');

toggleButton.addEventListener('click', () => {
    // Alternar la clase 'close' en el sidebar para mostrar/ocultar
  navbar.classList.toggle('close');
  document.body.classList.toggle('active');
  if (navbar.classList.contains('close')) {
    toggleButton.innerHTML = '<i class="fa-solid fa-right-long"></i>';
  } else {
    toggleButton.innerHTML = '<i class="fa-solid fa-backward"></i>';
  }

  /*quiero alternar las clase active  en los enlaces (a) cuando le de click */


});
// Añadir un evento de clic a los enlaces del sidebar

