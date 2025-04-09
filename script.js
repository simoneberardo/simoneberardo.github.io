if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener("load", () => {
  if (performance.navigation.type === 1 || performance.getEntriesByType("navigation")[0]?.type === "reload") {
    window.scrollTo(0, 0);
  }
});

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
/*function showExperience(id) {
  document.querySelectorAll('.experience-details').forEach(el => {
    el.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.exp-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = [...document.querySelectorAll('.exp-btn')].find(btn => btn.textContent.includes(document.getElementById(id).querySelector('h4').textContent));
  if (activeBtn) activeBtn.classList.add('active');
}*/

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

function showExperience(id) {
  // Rimuove classe active da tutti i dettagli
  document.querySelectorAll('.experience-details').forEach(el => {
    el.classList.remove('active');
  });

  // Aggiunge classe active SOLO al dettaglio selezionato
  const selected = document.getElementById(id);
  if (selected) selected.classList.add('active');

  // Rimuove active da tutti i pulsanti
  document.querySelectorAll('.exp-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Attiva il pulsante cliccato
  const btn = [...document.querySelectorAll('.exp-btn')].find(b => b.getAttribute('onclick').includes(id));
  if (btn) btn.classList.add('active');
}

// Mostra/nasconde il bottone scroll-to-top
window.addEventListener('scroll', () => {
  const btn = document.querySelector('.scroll-to-top');
  if (window.scrollY > 300) {
    btn.style.display = 'flex';
  } else {
    btn.style.display = 'none';
  }
});

/*const Hex = Honeycomb.extendHex({ size: 50, orientation: 'flat' });
const Grid = Honeycomb.defineGrid(Hex);
const hexes = Grid.rectangle({ width: 5, height: 3 });

const icons = [
  { name: 'linux' }, { name: 'windows' }, { name: 'powershell' },
  { name: 'network' }, { name: 'sccm' }, { name: 'intune' },
  { name: 'azure' }, { name: 'git' }, { name: 'teams' }, { name: 'office' }
];

const container = document.getElementById('skills-grid');
const hexWidth = 86.6; // Altezza di un esagono con size 50
const hexHeight = 100; // Calcolato in base alla forma

hexes.forEach((hex, i) => {
  if (i >= icons.length) return;

  const div = document.createElement('div');
  div.className = 'hex-tile';

  // ✅ Calcolo corretto con dimensioni reali da Honeycomb
  const xOffset = hex.x * (hexWidth * 0.75);
  const yOffset = hex.y * hexHeight + (hex.x % 2) * (hexHeight / 2);

  div.style.left = `${xOffset}px`;
  div.style.top = `${yOffset}px`;

  const img = document.createElement('img');
  img.src = `https://via.placeholder.com/48?text=${icons[i].name}`;
  img.alt = icons[i].name;

  const label = document.createElement('span');
  label.textContent = icons[i].name;

  div.appendChild(img);
  div.appendChild(label);
  container.appendChild(div);
});
*/

document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll("h2, h3");

  titles.forEach((title) => {
    title.classList.add("animate-title");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  titles.forEach((title) => {
    observer.observe(title);
  });

  // Override del click sui link del menu
  document.querySelectorAll(".section-menu a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // blocca comportamento default
      const id = link.getAttribute("href").replace("#", "");
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });

        // Sezione visibile => reset animazione titolo
        const title = section.querySelector("h2, h3");
        if (title) {
          title.classList.remove("visible");

          // Attendi che scrollIntoView finisca
          setTimeout(() => {
            title.classList.add("visible");
          }, 500);
        }
      }
    });
  });
});




