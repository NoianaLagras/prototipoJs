
//       Menu con dropdown
const dropdownMenu = document.getElementById('arrowDropdown');
const submenu = document.querySelector('.submenu');

dropdownMenu.addEventListener('click', () => {
  submenu.classList.toggle('active');
});

