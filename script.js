// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Animate product cards on scroll
  const productCards = document.querySelectorAll('.product-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  productCards.forEach(card => observer.observe(card));

  // Add to cart interaction
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const product = button.getAttribute('data-product');
      alert(`${product} has been added to your cart!`);
    });
  });

  // Menu toggle for mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Package tracking (if applicable)
  const trackForm = document.getElementById('track-form');
  const trackResult = document.getElementById('track-result');

  if (trackForm && trackResult) {
    trackForm.addEventListener('submit', e => {
      e.preventDefault();
      const trackingId = document.getElementById('tracking-id').value;
      setTimeout(() => {
        trackResult.textContent = `Package ${trackingId} is in transit.`;
      }, 1000);
    });
  }

  // Feedback submission
  const feedbackForm = document.getElementById('feedback-form');
  const feedbackMessage = document.getElementById('feedback-message');

  if (feedbackForm && feedbackMessage) {
    feedbackForm.addEventListener('submit', e => {
      e.preventDefault();
      setTimeout(() => {
        feedbackMessage.textContent = 'Thank you for your feedback!';
        feedbackMessage.classList.add('success');
        feedbackForm.reset();
      }, 800);
    });
  }
});
