
// =========================
// Menu burger
// =========================
document.getElementById('navBurger').onclick = function() {
  document.getElementById('navMenu').classList.toggle('nav-open');
};

    
// =========================
// FILTRAGE DES COURS
// =========================
const filtres = ['filtre-filiere', 'filtre-module', 'filtre-semestre'].map(id =>
  document.getElementById(id)
);
const blocParFiliere = document.getElementById('cours-par-filiere');
const blocFiltres = document.getElementById('cours-filtres');
const tousLesCours = document.querySelectorAll('.course');

function appliquerFiltre() {
  if (!filtres.every(f => f)) return; // sécurité : ne rien faire si les filtres n'existent pas
  const [filiere, module, semestre] = filtres.map(f => f.value);
  const tousLesFiltresAll = [filiere, module, semestre].every(val => val === 'all');
  blocParFiliere.style.display = tousLesFiltresAll ? 'block' : 'none';
  blocFiltres.style.display = tousLesFiltresAll ? 'none' : 'grid';
  blocFiltres.innerHTML = '';
  if (!tousLesFiltresAll) {
    tousLesCours.forEach(course => {
      const match =
        (filiere === 'all' || course.dataset.filiere === filiere) &&
        (module === 'all' || course.dataset.module === module) &&
        (semestre === 'all' || course.dataset.semestre === semestre);
      if (match) blocFiltres.appendChild(course.cloneNode(true));
    });
  }
}
filtres.forEach(select => select?.addEventListener('change', appliquerFiltre));


// =========================
// PAGE COURS / CHAPITRES / PDF / QUIZ
// =========================

// --- Affichage des chapitres ---
function showChapter(id) {
  const chapters = document.querySelectorAll('.chapter');
  chapters.forEach(ch => ch.style.display = 'none');
  const chapter = document.getElementById(id);
  if (chapter) chapter.style.display = 'block';
}

// --- Onglets ---
function showTab(button, tabId) {
  const parent = button.closest('.chapter');
  if (!parent) return;
  parent.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
  parent.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  const tab = document.getElementById(tabId);
  if (tab) tab.style.display = 'block';
  button.classList.add('active');
}

// --- Quiz ---
function submitQuiz(formId, resultId) {
  const form = document.getElementById(formId);
  const result = document.getElementById(resultId);
  if (!form || !result) return false;

  const data = new FormData(form);
  let score = 0;
  let total = 0;
  for (let [key, value] of data.entries()) {
    score += parseInt(value) || 0;
    total++;
  }
  result.innerText = `Votre score : ${score} / ${total}`;
  return false;
}

// --- PDF.js ---
const pdfState = {};

function initPDF(pdfId, canvasId, prevId, nextId, pageNumId, pageCountId, url) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || !pdfjsLib) return;
  const ctx = canvas.getContext('2d');

  pdfjsLib.getDocument(url).promise.then(pdfDoc => {
    pdfState[pdfId] = { pdfDoc, pageNum: 1, canvasId, pageNumId };
    document.getElementById(pageCountId).innerText = pdfDoc.numPages;
    renderPage(pdfId);
  });

  document.getElementById(prevId)?.addEventListener('click', () => changePage(pdfId, -1));
  document.getElementById(nextId)?.addEventListener('click', () => changePage(pdfId, +1));
}

function renderPage(pdfId) {
  const state = pdfState[pdfId];
  if (!state) return;
  state.pdfDoc.getPage(state.pageNum).then(page => {
    const canvas = document.getElementById(state.canvasId);
    const ctx = canvas.getContext('2d');
    const viewport = page.getViewport({ scale: 1.2 });
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    page.render({ canvasContext: ctx, viewport });
    document.getElementById(state.pageNumId).innerText = state.pageNum;
  });
}

function changePage(pdfId, delta) {
  const state = pdfState[pdfId];
  if (!state) return;
  const newPage = state.pageNum + delta;
  if (newPage < 1 || newPage > state.pdfDoc.numPages) return;
  state.pageNum = newPage;
  renderPage(pdfId);
}

document.addEventListener('DOMContentLoaded', () => {
  // Affiche le premier chapitre
  const firstChapter = document.querySelector('.chapter');
  if (firstChapter) firstChapter.style.display = 'block';

  // Initialise les PDF
  const pdfDivs = document.querySelectorAll('[id^="pdf-canvas"]');
  pdfDivs.forEach(canvas => {
    const num = canvas.id.replace('pdf-canvas', '');
    const url = canvas.dataset.url;
    if (url) {
      initPDF(`pdf${num}`, canvas.id, `prev${num}`, `next${num}`, `page-num${num}`, `page-count${num}`, url);
    }
  });
});
