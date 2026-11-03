const buttons = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('main section');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const targetId = btn.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({behavior: "smooth"});
    }
  });
});

document.getElementById('btnContact').addEventListener('click', () => {
  document.querySelector('nav button[data-target="contact"]').click();
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert("Veuillez remplir tous les champs SVP.");
    return;
  }

  alert(`Merci ${name}, votre message a bien été envoyé !`);
  form.reset();
  document.querySelector('nav button[data-target="accueil"]').click();
});

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY + window.innerHeight / 3;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.id;

    if (scrollPosition >= top && scrollPosition < top + height) {
      buttons.forEach(b => b.classList.remove('active'));
      const btn = document.querySelector(`nav button[data-target="${id}"]`);
      if (btn) btn.classList.add('active');
    }
  });
});
