// Miscelâneo

function Fechar_Janela(element) {
    element.parentNode.style.display = "none";
}

// Definindo o Armazenamento Local

if (localStorage.getItem("status") === null) {
    localStorage.setItem("status", "true");
}

if (localStorage.getItem("dark-side") === null) {
    localStorage.setItem("dark-side", "false");
}

// Anúncios

let repetir;

if (localStorage.getItem("status") === "true") {
    repetir = setInterval(Abrir_Anuncio, 5000);
}

function Abrir_Anuncio() {
    var n = Math.floor(Math.random() * 3);
    var anuncio = document.getElementsByClassName("anuncio")[n].style;
    anuncio.display = "block";
}

function Parar_Anuncios() {
    if (localStorage.getItem("status") === "true") {
        clearInterval(repetir);
        var paywall = document.getElementsByClassName("paywall")[0].style;
        paywall.display = "flex";
        localStorage.setItem("status", "false");
    }
}

// Modo Escuro

if (localStorage.getItem("dark-side") === "true") {
    document.querySelector(":root").style.setProperty("--background", "#262626");
    document.querySelector(":root").style.setProperty("--navbg", "#444444");
    document.querySelector(":root").style.setProperty("--metadatac", "rgb(112, 112, 112)");
    document.querySelector(":root").style.setProperty("--metadatabor", "rgb(189, 186, 186)");

    document.getElementsByClassName("button-dark-side")[0].style.color("white");
    document.getElementsByClassName("button-dark-side")[0].style.backgroundColor("black");
    element.style.borderColor = "white"
}

function THE_DARK_SIDE(element) {
    if (localStorage.getItem("dark-side") === "true") {
        localStorage.setItem("dark-side", "false");

        document.querySelector(":root").style.setProperty("--background", "rgb(73, 81, 111)");
        document.querySelector(":root").style.setProperty("--navbg", "rgb(100, 114, 163)");
        document.querySelector(":root").style.setProperty("--metadatac", "rgb(96, 99, 112)");
        document.querySelector(":root").style.setProperty("--metadatabor", "gray");

        element.style.color = "black";
        element.style.backgroundColor = "white";
        element.style.borderColor = "black"
    }

    else {
        localStorage.setItem("dark-side", "true");

        document.querySelector(":root").style.setProperty("--background", "#262626");
        document.querySelector(":root").style.setProperty("--navbg", "#444444");
        document.querySelector(":root").style.setProperty("--metadatac", "rgb(112, 112, 112)");
        document.querySelector(":root").style.setProperty("--metadatabor", "rgb(189, 186, 186)");

        element.style.color = "white";
        element.style.backgroundColor = "black";
        element.style.borderColor = "white"
    }
}