const siteMenuItemToggles = document.getElementsByClassName('site-menu-item-toggle');

for (var i=0; i < siteMenuItemToggles.length; i++) {
  const siteMenuItemToggle = siteMenuItemToggles[i];
  const target = siteMenuItemToggle.dataset.target;
  siteMenuItemToggle.addEventListener('click', function() {
    const list = document.getElementById(target);
    list.style.display = list.style.display == 'none' ? 'block' : 'none';
    siteMenuItemToggle.style.transform = siteMenuItemToggle.style.transform == 'rotate(180deg)' ? '' : 'rotate(180deg)';
  })
}
