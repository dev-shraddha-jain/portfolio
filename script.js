document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const mobileNavLinks = document.querySelectorAll('.nav-links a');
  const contactForm = document.getElementById('contact-form');

  // Toggle mobile menu
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }

  // Close mobile menu on link click
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // Contact form handling
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const mailtoLink = `mailto:shraddhatongya97@gmail.com?subject=Portfolio Contact from ${formData.get('name')}&body=${formData.get('message')}%0A%0AFrom: ${formData.get('email')}`;
      window.location.href = mailtoLink;
      e.target.reset();
    });
  }

  // Smooth scroll
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
});