// Contact form
const form = document.getElementById('contact-form');
form.addEventListener('submit', e=>{
  e.preventDefault();
  alert('Thanks for your message! I will respond soon.');
  form.reset();
});

// Fade-in sections
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:0.2});
sections.forEach(section=>observer.observe(section));

// Particle effect
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for(let i=0;i<150;i++){
  particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+1,d:Math.random()*1});
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle='cyan';
  ctx.beginPath();
  for(let i=0;i<particles.length;i++){
    let p = particles[i];
    ctx.moveTo(p.x,p.y);
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2,true);
  }
  ctx.fill();
  update();
}

let angle = 0;
function update(){
  angle+=0.01;
  for(let i=0;i<particles.length;i++){
    let p = particles[i];
    p.y += Math.cos(angle+p.d)+1+p.r/2;
    p.x += Math.sin(angle)*2;
    if(p.x>canvas.width)p.x=0;
    if(p.x<0)p.x=canvas.width;
    if(p.y>canvas.height)p.y=0;
  }
}

setInterval(draw,33);
window.addEventListener('resize',()=>{
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
});
