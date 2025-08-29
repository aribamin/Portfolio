// Hamburger toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click', ()=>{nav.classList.toggle('nav-active');});

// Dark/light mode
const toggleDark = document.querySelector('.toggle-dark');
toggleDark.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  toggleDark.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Contact form
const form = document.getElementById('contact-form');
form.addEventListener('submit', e=>{
  e.preventDefault();
  alert('Thanks for your message! I will get back to you soon.');
  form.reset();
});

// Fade-in sections
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');}
  });
},{threshold:0.2});
sections.forEach(section=>observer.observe(section));
