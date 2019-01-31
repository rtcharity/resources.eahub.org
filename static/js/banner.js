var menu_btn = document.getElementById('burger-btn')
var navbar = document.getElementById('navbar')
menu_btn.addEventListener('click', function() {
  navbar.style.display = navbar.style.display == 'inline-block' ? 'none' : 'inline-block';
})
