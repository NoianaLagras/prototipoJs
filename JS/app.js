//       Menu con dropdown
const dropdownToggle = document.getElementById('arrowDropdown');
const submenu = document.querySelector('.submenu');

dropdownToggle.addEventListener('click', () => {
  submenu.classList.toggle('active');
});

