function Fechar_Anuncio(element) {
    element.parentNode.style.display = "none";
}

function Abrir_Anuncio() {
    var n = Math.floor(Math.random() * 3)
    var anuncio = document.getElementsByClassName("anuncio")[n].style;
    anuncio.display = "block";
}