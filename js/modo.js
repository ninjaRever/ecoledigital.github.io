
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







// // === CHAPITRES ===
// function showChapter(id) {
//   document.querySelectorAll('.chapter').forEach(ch => ch.classList.remove('active'));
//   document.getElementById(id).classList.add('active');
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// // === TABS ===
// function showTab(btn, id) {
//   const container = btn.closest('.chapter');
//   container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
//   container.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
//   btn.classList.add('active');
//   document.getElementById(id).classList.add('active');
// }

// === QUIZ ===
function checkQuiz(qnum, correct) {
  const selected = document.querySelector(`input[name='q${qnum}']:checked`);
  const result = document.getElementById(`result${qnum}`);
  if (!selected) return (result.textContent = "Choisissez une réponse !");
  if (parseInt(selected.value) === correct) {
    result.textContent = "✅ Bonne réponse !";
    document.getElementById(`progress${qnum}`).style.width = "100%";
  } else result.textContent = "❌ Mauvaise réponse.";
}

// === PDF (commun à tous les cours) ===
const pdfDocs = {};
const pageNums = {};

async function loadPDF(num, url) {
  const canvas = document.getElementById(`pdfCanvas${num}`);
  const ctx = canvas.getContext('2d');
  pdfDocs[num] = await pdfjsLib.getDocument(url).promise;
  pageNums[num] = 1;
  renderPage(num);
}

async function renderPage(num) {
  const pdf = pdfDocs[num];
  const page = await pdf.getPage(pageNums[num]);
  const viewport = page.getViewport({ scale: 1 });
  const canvas = document.getElementById(`pdfCanvas${num}`);
  const ctx = canvas.getContext('2d');
  canvas.height = viewport.height;
  canvas.width = viewport.width;
  await page.render({ canvasContext: ctx, viewport }).promise;
}

// === PAGE CHANGE ===
function changePage(dir, num) {
  const pdf = pdfDocs[num];
  if (!pdf) return;
  pageNums[num] += dir === 'next' ? 1 : -1;
  pageNums[num] = Math.max(1, Math.min(pageNums[num], pdf.numPages));
  renderPage(num);
}
