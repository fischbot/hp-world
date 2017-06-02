$(document).ready(function() {
  $('.bxslider').bxSlider();
});

var mobileNav = document.querySelector('.mobile-header-nav');
var closeMenuBtn = document.getElementById('close-menu-btn');
// mobile nav toggle
var menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', function() {
  // var navItems = document.getElementById('nav-items');
  if (mobileNav.style.display === 'none') {
    mobileNav.style.display = 'block';
  } else {
    mobileNav.style.display = 'none';
  }
}, false);

closeMenuBtn.addEventListener('click', function(){
  mobileNav.style.display = 'none';
}, false);

// TODO: fix bug where header disappears in tablet mode and greater
