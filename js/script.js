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

  // Add to cart interaction (for forms and buttons)
  document.querySelectorAll('.add-to-cart, form[action*="add_to_cart"]').forEach(el => {
    el.addEventListener('submit', e => {
      if (el.tagName.toLowerCase() === 'form') {
        e.preventDefault();
        alert('Item has been added to your cart!');
        el.submit();
      }
    });
    if (el.tagName.toLowerCase() === 'button') {
      el.addEventListener('click', () => {
        const product = el.getAttribute('data-product') || 'Product';
        alert(`${product} has been added to your cart!`);
      });
    }
  });

  // Menu toggle for mobile
  const menuToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Order tracking form (matching current HTML)
  const trackOrderForm = document.querySelector('#track-order form');

  if (trackOrderForm) {
    trackOrderForm.addEventListener('submit', e => {
      e.preventDefault();
      const orderId = trackOrderForm.querySelector('input[name="order_id"]').value;
      alert(`Tracking order ${orderId}...`);
      // You can replace alert with an actual fetch request to your PHP backend
    });
  }
});
