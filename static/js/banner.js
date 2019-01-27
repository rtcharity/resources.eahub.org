var burger = document.getElementById('menu-burger')
var dropdown = document.getElementById('navbar')
burger.addEventListener('click', function() {
  navbar.style.display = (navbar.style.display == 'block') ? 'none' : 'block';
})

var more_btn = document.getElementById('more-btn')
var more_menu = document.getElementById('more-menu')
more_btn.addEventListener('click', function() {
  more_menu.style.display = (more_menu.style.display == 'block') ? 'none' : 'block';
})
