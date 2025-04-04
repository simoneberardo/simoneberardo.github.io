document.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth * 100;
  const y = e.clientY / window.innerHeight * 100;
  document.body.style.setProperty('--x', `${x}%`);
  document.body.style.setProperty('--y', `${y}%`);
});

function toggleTheme() {
  document.body.classList.toggle("light-theme");
}

function showExperience(id) {
  const all = document.querySelectorAll('.exp-content');
  const buttons = document.querySelectorAll('.exp-btn');

  all.forEach(el => {
    el.classList.remove('active');
    el.style.opacity = 0;
    el.style.transition = 'opacity 0.3s ease';
  });

  buttons.forEach(btn => btn.classList.remove('active'));
  const target = document.getElementById(id);
  target.classList.add('active');
  setTimeout(() => { target.style.opacity = 1; }, 50);

  const clickedButton = Array.from(buttons).find(btn => btn.textContent.includes(target.querySelector('h4').textContent));
  if (clickedButton) clickedButton.classList.add('active');
}
