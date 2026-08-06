// ===========================
// SCRIPT.JS — Cultura em Movimento
// ===========================

const toggle = document.querySelector('.navbar__toggle');
const menu   = document.querySelector('.navbar__links');
const navbar = document.querySelector('.navbar');

// Abre/fecha o menu mobile
toggle.addEventListener('click', () => {
  toggle.classList.toggle('ativo');
  menu.classList.toggle('aberto');
});

// Fecha o menu ao clicar em um link
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('ativo');
    menu.classList.remove('aberto');
  });
});

// Reforça a borda da navbar ao rolar
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.borderBottomColor = 'rgba(0,0,0,0.12)';
  } else {
    navbar.style.borderBottomColor = 'rgba(0,0,0,0.07)';
  }
});
