 // Dynamic project filter
const filterInput = () => {
  const q = document.getElementById('search').value.toLowerCase().trim();
  document.querySelectorAll('[data-project]').forEach(card => {
    const txt = (card.dataset.project || '').toLowerCase();
    card.style.display = txt.includes(q) ? '' : 'none';
  });
};

window.addEventListener('DOMContentLoaded', () => {
  // Attach filter
  document.getElementById('search')?.addEventListener('input', filterInput);

  // Set current year in footer
  document.getElementById('y').textContent = new Date().getFullYear();

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 100) {
    nav.style.background = 'rgba(15, 23, 42, 0.95)';
  } else {
    nav.style.background = 'rgba(15, 23, 42, 0.8)';
  }
});

