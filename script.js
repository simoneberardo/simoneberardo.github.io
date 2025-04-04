// Effetto luce cursore
document.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth * 100;
  const y = e.clientY / window.innerHeight * 100;
  document.body.style.setProperty('--x', `${x}%`);
  document.body.style.setProperty('--y', `${y}%`);
});

// Toggle tema
function toggleTheme() {
  document.body.classList.toggle("light-theme");
}

// Esperienze switch
function showExperience(id) {
  document.querySelectorAll('.experience-details').forEach(el => {
    el.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.exp-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = [...document.querySelectorAll('.exp-btn')].find(btn => btn.textContent.includes(document.getElementById(id).querySelector('h4').textContent));
  if (activeBtn) activeBtn.classList.add('active');
}

// Scrollspy menu attivo
const links = document.querySelectorAll('.section-menu a');
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 100;
  links.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});
