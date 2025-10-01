// Intersection Observer for fade-in
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(fader => observer.observe(fader));

// Testimonial Slider
let current = 0;
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  current = (current === 0) ? testimonials.length - 1 : current - 1;
  showTestimonial(current);
});

nextBtn.addEventListener('click', () => {
  current = (current === testimonials.length - 1) ? 0 : current + 1;
  showTestimonial(current);
});

// Auto-rotate every 6s
setInterval(() => {
  current = (current === testimonials.length - 1) ? 0 : current + 1;
  showTestimonial(current);
}, 6000);

// Highlight nav on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
});
