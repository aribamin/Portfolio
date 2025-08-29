// Particles.js background
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#00c8ff" },
    shape: { type: "circle" },
    opacity: { value: 0.2 },
    size: { value: 3 },
    line_linked: { enable: true, distance: 120, color: "#00c8ff", opacity: 0.05, width: 1 },
    move: { enable: true, speed: 1 }
  }
});

// Rotating roles typing effect
const roles = ["Full-Stack Developer", "Cloud Engineer", "AI Enthusiast"];
let i = 0, charIndex = 0;
const subtitle = document.getElementById("hero-subtitle");

function typeRole() {
  subtitle.textContent = roles[i].substring(0, charIndex);
  charIndex++;
  if (charIndex > roles[i].length) {
    charIndex = 0;
    i = (i + 1) % roles.length;
    setTimeout(typeRole, 1500);
  } else {
    setTimeout(typeRole, 120);
  }
}
typeRole();

// Animate skill bars on scroll
const skills = document.querySelectorAll(".skill-bar-fill");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.skill;
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skills.forEach(skill => observer.observe(skill));

// Fallback: ensure bars fill even if observer fails
setTimeout(() => {
  skills.forEach(skill => {
    if (skill.style.width === "") skill.style.width = skill.dataset.skill;
  });
}, 1000);
