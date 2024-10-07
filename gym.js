let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => 
{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>
{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// typed text co/de

var typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weigth Gain', 'Strength Training', ' Fat Loss', 'Weigth Lifting', ' Running'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });