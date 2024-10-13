const toggler = document.getElementById('menu-toggler');
const menuContainer = document.getElementById('menu-container');

toggler.addEventListener('click', () => {
  menuContainer.classList.toggle('hidden');
  toggler.classList.toggle('lg:hidden');
});
menuContainer.addEventListener