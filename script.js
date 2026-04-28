// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Petit effet au scroll
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
});

// Init animation
/* 
document.querySelectorAll('.section').forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  card.style.transition = '0.5s';
});