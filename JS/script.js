var sub = document.querySelector('.sub-menu');

function mobileToggleOn() {
  if(sub.classList.contains('menu-toggle')) {
    sub.classList.remove('menu-toggle');
  }else {
    sub.classList.add('menu-toggle');
  }
}
