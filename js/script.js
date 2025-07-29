document.getElementById('navBurger').onclick = function() {
  document.getElementById('navMenu').classList.toggle('nav-open');
};

  const filtres = ['filtre-filiere', 'filtre-module', 'filtre-chapitre'].map(id => document.getElementById(id));
  const blocParFiliere = document.getElementById('cours-par-filiere');
  const blocFiltres = document.getElementById('cours-filtres');
  const tousLesCours = document.querySelectorAll('.course');
  function appliquerFiltre() {
    const [filiere, module, chapitre] = filtres.map(f => f.value);
    const tousLesFiltresAll = [filiere, module, chapitre].every(val => val === 'all');
    blocParFiliere.style.display = tousLesFiltresAll ? 'block' : 'none';
    blocFiltres.style.display = tousLesFiltresAll ? 'none' : 'grid';
    blocFiltres.innerHTML = '';
    if (!tousLesFiltresAll) {tousLesCours.forEach(course => {const match =
          (filiere === 'all' || course.dataset.filiere === filiere) &&
          (module === 'all' || course.dataset.module === module) &&
          (chapitre === 'all' || course.dataset.chapitre === chapitre);
        if (match) blocFiltres.appendChild(course.cloneNode(true));});}}
  filtres.forEach(select => select.addEventListener('change', appliquerFiltre));

