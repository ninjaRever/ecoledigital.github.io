document.getElementById('navBurger').onclick = function() {
  document.getElementById('navMenu').classList.toggle('nav-open');
};
function showTab(button, tabId) {
    const container = button.closest('div');
    const tabButtons = container.querySelectorAll('.tab-button');
    const tabContents = container.parentElement.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    tabContents.forEach(content => content.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';}
    
  const filtres = ['filtre-filiere', 'filtre-module', 'filtre-Semestre'].map(id => document.getElementById(id));
  const blocParFiliere = document.getElementById('cours-par-filiere');
  const blocFiltres = document.getElementById('cours-filtres');
  const tousLesCours = document.querySelectorAll('.course');
  function appliquerFiltre() {
    const [filiere, module, semestre] = filtres.map(f => f.value);
    const tousLesFiltresAll = [filiere, module, semestre].every(val => val === 'all');
    blocParFiliere.style.display = tousLesFiltresAll ? 'block' : 'none';
    blocFiltres.style.display = tousLesFiltresAll ? 'none' : 'grid';
    blocFiltres.innerHTML = '';
    if (!tousLesFiltresAll) {tousLesCours.forEach(course => {const match =
          (filiere === 'all' || course.dataset.filiere === filiere) &&
          (module === 'all' || course.dataset.module === module) &&
          (semestre === 'all' || course.dataset.semestre === semestre);
        if (match) blocFiltres.appendChild(course.cloneNode(true));});}}
  filtres.forEach(select => select.addEventListener('change', appliquerFiltre));


  function showChapter(id) {
    const chapters = document.querySelectorAll('.chapter');
    chapters.forEach(ch => ch.style.display = 'none');
    document.getElementById(id).style.display = 'block'; 
  }


function submitQuiz(formId, resultId) {
  const form = document.getElementById(formId);
  const result = document.getElementById(resultId);
  const data = new FormData(form);
  let score = 0;
  let total = 0;

  for (let [key, value] of data.entries()) {
    score += parseInt(value);
    total++;
  }

  result.innerText = `Votre score : ${score} / ${total}`;
  return false; 
}

