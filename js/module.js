document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get("page");
  const section = urlParams.get("section"); // "video", "support", "quiz"

  let videoUrl = "";
  let supportPdf = "";
  let quiz = "";
  let titreChapitre = "";

  switch (page) {
    case "reseauxchapitre1":
      titreChapitre = "Chapitre 1:  Présentation des réseaux";
      videoUrl = "https://www.youtube.com/embed/5XTrp2PlBYw";
      supportPdf = "../supports/reseau1.pdf";
      quiz = `
        <p>1. Qu'est-ce qu'un réseau ?</p>
      <label><input type="radio" name="q1" value="0"> Un périphérique</label>
      <label><input type="radio" name="q1" value="2"> Une interconnexion d’ordinateurs</label>
      <label><input type="radio" name="q1" value="0"> Un logiciel</label>
      <label><input type="radio" name="q1" value="0"> Un seul ordinateur</label>

      <p>2. Que signifie IP ?</p>
      <label><input type="radio" name="q2" value="0"> Interface Process</label>
      <label><input type="radio" name="q2" value="0"> Internet Page</label>
      <label><input type="radio" name="q2" value="1"> Internet Protocol</label>
      <label><input type="radio" name="q2" value="0"> Internal Program</label>

      <p>3. Quel équipement connecte plusieurs réseaux ?</p>
      <label><input type="radio" name="q3" value="0"> Un serveur</label>
      <label><input type="radio" name="q3" value="0"> Un modem</label>
      <label><input type="radio" name="q3" value="0"> Un switch</label>
      <label><input type="radio" name="q3" value="2"> Un routeur</label>

      <p>4. Quel protocole permet de transférer des fichiers ?</p>
      <label><input type="radio" name="q4" value="0"> HTTP</label>
      <label><input type="radio" name="q4" value="2"> FTP</label>
      <label><input type="radio" name="q4" value="0"> SMTP</label>
      <label><input type="radio" name="q4" value="0"> DNS</label>

      <p>5. Qu'est-ce qu'une adresse MAC ?</p>
      <label><input type="radio" name="q5" value="0"> Adresse IP publique</label>
      <label><input type="radio" name="q5" value="2"> Identifiant unique d'une interface réseau</label>
      <label><input type="radio" name="q5" value="0"> Nom de domaine</label>
      <label><input type="radio" name="q5" value="0"> Type de protocole</label>
      `;
      break;

    case "reseauxchapitre2":
      titreChapitre = "Chapitre 2:  Aspects Mathématiques des réseaux";
      videoUrl = "https://www.youtube.com/embed/abcd1234";
      supportPdf = "../pdf/support2.pdf";
      quiz = `
         <p>1. Qu'est-ce qu’un serveur web ?</p>
      <label><input type="radio" name="q1" value="2"> Un système qui héberge des sites</label>
      <label><input type="radio" name="q1" value="0"> Un navigateur</label>
      <label><input type="radio" name="q1" value="0"> Un protocole</label>
      <label><input type="radio" name="q1" value="0"> Un câble réseau</label>

      <p>2. Que signifie HTML ?</p>
      <label><input type="radio" name="q2" value="2"> HyperText Markup Language</label>
      <label><input type="radio" name="q2" value="0"> High Tech Main Language</label>
      <label><input type="radio" name="q2" value="0"> Hyperlink and Text Markup</label>
      <label><input type="radio" name="q2" value="0"> Home Tool Markup Language</label>

      <p>3. Quel est un exemple d'algorithme utilisé en réseaux ?</p>
      <label><input type="radio" name="q3" value="2"> Algorithme de Dijkstra</label>
      <label><input type="radio" name="q3" value="0"> Algorithme QuickSort</label>
      <label><input type="radio" name="q3" value="0"> Algorithme RSA</label>
      <label><input type="radio" name="q3" value="0"> Algorithme AES</label>

      <p>4. Qu'est-ce que la topologie en réseau ?</p>
      <label><input type="radio" name="q4" value="2"> La disposition des éléments dans un réseau</label>
      <label><input type="radio" name="q4" value="0"> Le type de protocole</label>
      <label><input type="radio" name="q4" value="0"> La vitesse de connexion</label>
      <label><input type="radio" name="q4" value="0"> Le nombre d’utilisateurs</label>

      <p>5. Quel est l'objectif principal de la théorie des graphes en réseaux ?</p>
      <label><input type="radio" name="q5" value="2"> Modéliser les connexions entre les nœuds</label>
      <label><input type="radio" name="q5" value="0"> Compiler du code</label>
      <label><input type="radio" name="q5" value="0"> Gérer les permissions</label>
      <label><input type="radio" name="q5" value="0"> Sécuriser les données</label>
      `;
      break;

    case "reseauxchapitre3":
      titreChapitre = "Chapitre 3:  Notions de base sur les réseaux";
      videoUrl = "https://www.youtube.com/embed/efgh5678";
      supportPdf = "../pdf/support3.pdf";
      quiz = `
        <p>1. Un nom de domaine est :</p>
      <label><input type="radio" name="q1" value="2"> Une adresse facile à retenir</label>
      <label><input type="radio" name="q1" value="0"> Un fichier</label>
      <label><input type="radio" name="q1" value="0"> Un protocole</label>
      <label><input type="radio" name="q1" value="0"> Un serveur</label>

      <p>2. Exemple de TLD ?</p>
      <label><input type="radio" name="q2" value="2"> .com, .org</label>
      <label><input type="radio" name="q2" value="0"> www, ftp</label>
      <label><input type="radio" name="q2" value="0"> HTTP, HTTPS</label>
      <label><input type="radio" name="q2" value="0"> IP, MAC</label>

      <p>3. Quelle est la fonction d'un DNS ?</p>
      <label><input type="radio" name="q3" value="2"> Traduire un nom de domaine en adresse IP</label>
      <label><input type="radio" name="q3" value="0"> Héberger un site web</label>
      <label><input type="radio" name="q3" value="0"> Transférer des fichiers</label>
      <label><input type="radio" name="q3" value="0"> Chiffrer les données</label>

      <p>4. Qu’est-ce qu’une adresse IP ?</p>
      <label><input type="radio" name="q4" value="2"> Identifiant unique d’un appareil sur un réseau</label>
      <label><input type="radio" name="q4" value="0"> Un protocole</label>
      <label><input type="radio" name="q4" value="0"> Un logiciel</label>
      <label><input type="radio" name="q4" value="0"> Un serveur</label>

      <p>5. Qu’est-ce qu’un proxy ?</p>
      <label><input type="radio" name="q5" value="2"> Un intermédiaire entre un utilisateur et Internet</label>
      <label><input type="radio" name="q5" value="0"> Un type de câble réseau</label>
      <label><input type="radio" name="q5" value="0"> Un navigateur</label>
      <label><input type="radio" name="q5" value="0"> Un antivirus</label>
      `;
      break;

    case "reseauxchapitre4":
      titreChapitre = "Chapitre 4:  Médias réseau";
      videoUrl = "https://www.youtube.com/embed/ijkl9012";
      supportPdf = "../pdf/support4.pdf";
      quiz = `
         <p>1. Quel est le rôle d’un média de transmission ?</p>
          <label><input type="radio" name="q1" value="0"> Fournir de l’électricité</label>
          <label><input type="radio" name="q1" value="2"> Transporter des données d’un point à un autre</label>
          <label><input type="radio" name="q1" value="0"> Générer des adresses IP</label>
          <label><input type="radio" name="q1" value="0"> Gérer la mémoire</label>

          <p>2. Lequel est un média guidé ?</p>
          <label><input type="radio" name="q2" value="0"> Infrarouge</label>
          <label><input type="radio" name="q2" value="2"> Câble coaxial</label>
          <label><input type="radio" name="q2" value="0"> Bluetooth</label>
          <label><input type="radio" name="q2" value="0"> Wifi</label>

          <p>3. Que signifie UTP ?</p>
          <label><input type="radio" name="q3" value="0"> Unité de Transmission Protocolée</label>
          <label><input type="radio" name="q3" value="2"> Unshielded Twisted Pair</label>
          <label><input type="radio" name="q3" value="0"> Universal Transport Path</label>
          <label><input type="radio" name="q3" value="0"> Unique Terminal Port</label>

          <p>4. Lequel est un média non guidé ?</p>
          <label><input type="radio" name="q4" value="0"> Fibre optique</label>
          <label><input type="radio" name="q4" value="2"> Onde radio</label>
          <label><input type="radio" name="q4" value="0"> Câble à paires torsadées</label>
          <label><input type="radio" name="q4" value="0"> Câble coaxial</label>

          <p>5. Quel média offre la meilleure immunité aux interférences ?</p>
          <label><input type="radio" name="q5" value="0"> Câble coaxial</label>
          <label><input type="radio" name="q5" value="0"> Paires torsadées</label>
          <label><input type="radio" name="q5" value="2"> Fibre optique</label>
          <label><input type="radio" name="q5" value="0"> Onde radio</label>
      `;
      break;

    case "reseauxchapitre5":
      titreChapitre = "Chapitre 5: Câblage de réseaux locaux et distants";
      videoUrl = "https://www.youtube.com/embed/mnop3456";
      supportPdf = "../pdf/support5.pdf";
      quiz = `

            <p>1. Qu’est-ce qu’un réseau local (LAN) ?</p>
          <label><input type="radio" name="q1" value="2"> Un réseau limité à une zone géographique restreinte</label>
          <label><input type="radio" name="q1" value="0"> Un réseau entre pays différents</label>
          <label><input type="radio" name="q1" value="0"> Une connexion Internet</label>
          <label><input type="radio" name="q1" value="0"> Un type de serveur</label>

          <p>2. Quelle est la fonction d’un panneau de brassage ?</p>
          <label><input type="radio" name="q2" value="0"> Fournir du courant électrique</label>
          <label><input type="radio" name="q2" value="2"> Centraliser les connexions des câbles réseau</label>
          <label><input type="radio" name="q2" value="0"> Contrôler l’accès aux fichiers</label>
          <label><input type="radio" name="q2" value="0"> Sécuriser les connexions sans fil</label>

          <p>3. Quelle est la norme pour les câbles Ethernet ?</p>
          <label><input type="radio" name="q3" value="0"> IEEE 802.3z</label>
          <label><input type="radio" name="q3" value="0"> USB 3.0</label>
          <label><input type="radio" name="q3" value="2"> IEEE 802.3</label>
          <label><input type="radio" name="q3" value="0"> ISO 27001</label>

          <p>4. Que signifie RJ45 ?</p>
          <label><input type="radio" name="q4" value="2"> Un connecteur pour câble réseau</label>
          <label><input type="radio" name="q4" value="0"> Un type de serveur</label>
          <label><input type="radio" name="q4" value="0"> Un protocole de routage</label>
          <label><input type="radio" name="q4" value="0"> Une norme de sécurité</label>

          <p>5. Quel outil sert à insérer les câbles dans un connecteur RJ45 ?</p>
          <label><input type="radio" name="q5" value="0"> Tournevis</label>
          <label><input type="radio" name="q5" value="0"> Testeur de câble</label>
          <label><input type="radio" name="q5" value="2"> Pince à sertir</label>
          <label><input type="radio" name="q5" value="0"> Scie</label>
      `;
      break;

    default:
      document.getElementById("page-content").innerHTML = "<p>Chapitre non trouvé.</p>";
      return;
  }

  // Injecter le contenu
  document.getElementById("titre-chapitre").textContent = titreChapitre;

  const html = `
    <div class="tabs">
      <button class="tab-button active" onclick="showTab(this, 'video')">📹 Vidéo</button>
      <button class="tab-button" onclick="showTab(this, 'support')">📄 Support de cours</button>
      <button class="tab-button" onclick="showTab(this, 'quiz')">❓ Quiz</button>
    </div>

    <div id="video" class="tab-content video-content" style="display:block;">
      <iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
    </div>

    <div id="support" class="tab-content support-content" style="display:none;">
      <div class="support-container">
        <div class="support-viewer">
          <canvas id="pdf-canvas"></canvas>
          <div class="pdf-controls">
            <button onclick="prevPage()">⬅️ </button>
            <span id="page-info">Page 1</span>
            <button onclick="nextPage()">➡️ </button>
          </div>
        </div>
        <div class="support-controls">
          <a href="${supportPdf}" download class="download-btn">📥 Télécharger le PDF</a>
        </div>
      </div>
    </div>

    <div id="quiz" class="tab-content quiz-content" style="display:none;">
      <div class="quiz-container">
        <form id="quizForm" onsubmit="return submitQuiz('quizForm', 'result')">
          ${quiz}
          <br><button type="submit" class="submit-btn">Valider mes réponses</button>
        </form>
        <div id="result" class="quiz-result"></div>
      </div>
    </div>
  `;

  document.getElementById("page-content").innerHTML = html;

  if (section === "support" || section === null) {
    showTab(document.querySelector("[onclick*='support']"), 'support');
  }
  if (section === "video") {
    showTab(document.querySelector("[onclick*='video']"), 'video');
  }
  if (section === "quiz") {
    showTab(document.querySelector("[onclick*='quiz']"), 'quiz');
  }

  // Attendre que le canvas soit dans le DOM
  setTimeout(() => {
    if (document.getElementById('pdf-canvas')) {
      loadPdf(supportPdf);
    }
  }, 200);
});

function showTab(button, tabId) {
  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(div => div.style.display = "none");
  button.classList.add("active");
  document.getElementById(tabId).style.display = "block";
}

function submitQuiz(formId, resultId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll("input[type=radio]:checked");
  let score = 0;
  inputs.forEach(input => {
    score += parseInt(input.value);
  });
  document.getElementById(resultId).textContent = `Votre score est ${score} / 10`;
  return false;
}

// === PDF.js logic ===
let pdfDoc = null,
    pageNum = 1,
    pageRendering = false,
    pageNumPending = null,
    canvas = null,
    ctx = null;

function renderPage(num) {
  pageRendering = true;
  pdfDoc.getPage(num).then(page => {
    const viewport = page.getViewport({ scale: 1.5 });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };
    page.render(renderContext).promise.then(() => {
      pageRendering = false;
      document.getElementById("page-info").textContent = `Page ${pageNum}`;
      if (pageNumPending !== null) {
        renderPage(pageNumPending);
        pageNumPending = null;
      }
    });
  });
}

function queueRenderPage(num) {
  if (pageRendering) {
    pageNumPending = num;
  } else {
    renderPage(num);
  }
}

function nextPage() {
  if (pageNum >= pdfDoc.numPages) return;
  pageNum++;
  queueRenderPage(pageNum);
}

function prevPage() {
  if (pageNum <= 1) return;
  pageNum--;
  queueRenderPage(pageNum);
}

function loadPdf(pdfUrl) {
  canvas = document.getElementById('pdf-canvas');
  ctx = canvas.getContext('2d');
  pdfjsLib.getDocument(pdfUrl).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    pageNum = 1;
    renderPage(pageNum);
  });
}
