var burger = document.getElementById('menu_burger')
var dropdown = document.getElementById('dropdown')
burger.addEventListener('click', function() {
  dropdown.style.display = (dropdown.style.display == 'block') ? 'none' : 'block';
})
