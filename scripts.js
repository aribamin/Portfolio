// Initialize particles.js
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "size": { "value": 3 },
    "move": { "speed": 1 },
    "line_linked": { "enable": true, "opacity": 0.05 }
  }
});

// Hero typewriter effect using GSAP
gsap.from("#hero-title", { y: -50, opacity: 0, duration: 1, ease: "power2.out" });
gsap.from("#hero-subtitle", { y: 50, opacity: 0, duration: 1, delay: 0.5 });

// Animate skill bars when in view
const skills = document.querySelectorAll("[data-skill]");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      gsap.to(bar, { width: bar.dataset.skill, duration: 1.5, ease: "power2.out" });
      observer.unobserve(bar);
    }
  });
}, { threshold: 0.5 });

skills.forEach(skill => observer.observe(skill));
