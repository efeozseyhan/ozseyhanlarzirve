document.getElementById('yil').textContent = new Date().getFullYear();

// Smooth scroll
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if(!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', id);
  });
});