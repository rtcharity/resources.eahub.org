const siteMenuItemToggles = document.getElementsByClassName('site-menu-item-toggle');

for (var i=0; i < siteMenuItemToggles.length; i++) {
  const siteMenuItemToggle = siteMenuItemToggles[i];
  const target = siteMenuItemToggle.dataset.target;
  siteMenuItemToggle.addEventListener('click', function() {
    const list = document.getElementById(target);
    list.style.display = list.style.display == 'none' ? 'block' : 'none';
    if (siteMenuItemToggle.classList.contains('caret-up')) {
      siteMenuItemToggle.classList.remove('caret-up');
    } else {
      siteMenuItemToggle.classList.add('caret-up');
    }
  })
}
