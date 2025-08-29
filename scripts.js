// Particles.js matrix/futuristic background
particlesJS("particles-js", {
  particles: {
    number: { value: 120 },
    color: { value: "#0ff" },
    shape: { type: "circle" },
    opacity: { value: 0.3 },
    size: { value: 3 },
    line_linked: { enable: true, distance: 120, color: "#0ff", opacity: 0.1, width: 1 },
    move: { enable: true, speed: 1 }
  }
});

// Hero rotating roles typing effect
const roles = ["Full-Stack Developer", "Cloud Engineer", "AI Enthusiast"];
let i = 0, charIndex = 0, currentRole = "";
const subtitle = document.getElementById("hero-subtitle");

function typeRole() {
  if (charIndex <= roles[i].length) {
    subtitle.textContent = roles[i].substring(0, charIndex);
    charIndex++;
    setTimeout(typeRole, 120);
  } else {
    setTimeout(() => {
      charIndex = 0;
      i = (i + 1) % roles.length;
      typeRole();
    }, 1500);
  }
}
typeRole();

// Animate skill bars on scroll
const skills = document.querySelectorAll("[data-skill]");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { width: entry.target.dataset.skill, duration: 1.5, ease: "power2.out" });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
skills.forEach(skill => observer.observe(skill));

// Animate hero fade-in
gsap.from("#hero-title", { opacity: 0, y: -50, duration: 1 });
gsap.from("#hero-subtitle", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".neon-button", { opacity: 0, y: 50, duration: 1, delay: 1 });
