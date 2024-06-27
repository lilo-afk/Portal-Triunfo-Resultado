function getFullCourseName() {
  // Obtém o nome do curso do título da página
  var courseName = document.getElementById("resultado-title").textContent;
  return courseName;
}

function updateContent() {
  var resultadoTitle = document.getElementById("resultado-title");
  resultadoTitle.textContent = getFullCourseName();
}

function updateShareButtons() {
  var whatsappBtn = document.getElementById("whatsapp");
  var twitterBtn = document.getElementById("twitter");
  var facebookBtn = document.getElementById("facebook");
  var linkedinBtn = document.getElementById("linkedin");
  var redditBtn = document.getElementById("reddit");

  // Obtém a URL da página
  var pageUrl = window.location.href;
  // var shortUrl = "https://www.fateccarapicuiba.edu.br/estude/";

  // Cria o texto do compartilhamento com o resultado e a URL
  var shareText =
    "Meu perfil de curso é " +
    getFullCourseName() +
    ". E o seu? Acesse a página ESTUDE e Jogue também o game Portal do Triunfo! " +
    encodeURIComponent(pageUrl);

  // Atualiza os links dos botões de compartilhamento
  whatsappBtn.href = "https://api.whatsapp.com/send?phone=&text=" + shareText;
  twitterBtn.href = "https://twitter.com/intent/tweet?text=" + shareText;
  facebookBtn.href =
    "https://www.facebook.com/sharer/sharer.php?u=" +
    encodeURIComponent(pageUrl) +
    "&quote=" +
    encodeURIComponent(shareText);
  linkedinBtn.href =
    "https://www.linkedin.com/sharing/share-offsite/?url=" +
    pageUrl +
    "&summary=" +
    shareText;
  redditBtn.href =
    "https://www.reddit.com/submit?url=" +
    encodeURIComponent(pageUrl) +
    "&title=" +
    shareText;
}

// Chama a função para atualizar o conteúdo e os botões de compartilhamento
updateContent();
updateShareButtons();

// Share via...

document
  .getElementById("share-via")
  .addEventListener("click", function (event) {
    if (navigator.share) {
      navigator
        .share({
          title: "JOGO Portal do Triunfo",
          text: "Descubra jogando o seu curso ideal na Fatec Carapicuíba!",
          url: window.location.href,
        })
        .catch(function () {
          showToastMessage("Ocorreu um erro.", true);
        });
    }
  });
