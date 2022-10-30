"use strict"

// Definindo o Dark Mode
if (localStorage.getItem("dark-mode") === null) {
    localStorage.setItem("dark-mode", "false");
}

// Startup Animation
function start_menu(t) {
    t.style.display = 'none'
    
    document.querySelectorAll("video")[1].play()
}

// Modo Escuro e Normal
let img_botao
let img_minibotao 
let img_botaotema

let img_botao_active 
let img_minibotao_active
let img_botaotema_active

let botoes = document.querySelectorAll(".b")
let botoes_pequenos = document.querySelector(".bp").children
let botao_tema = document.querySelector("#bm")

function normal_mode() {
    img_botao = "../images/menu-button.png"
    img_minibotao = "../images/menu-minibutton.png"
    img_botaotema = "../images/menu-themebutton.png"

    img_botao_active = "../images/menu-button-active.png"
    img_minibotao_active = "../images/menu-minibutton-active.png"
    img_botaotema_active = "../images/menu-themebutton-active.png"
}
function dark_mode() {
    img_botao = "../images/Dark-Mode/menu-button.png"
    img_minibotao = "../images/Dark-Mode/menu-minibutton.png"
    img_botaotema = "../images/Dark-Mode/menu-themebutton.png"

    img_botao_active = "../images/Dark-Mode/menu-button-active.png"
    img_minibotao_active = "../images/Dark-Mode/menu-minibutton-active.png"
    img_botaotema_active = "../images/Dark-Mode/menu-themebutton-active.png"
}

if (localStorage.getItem("dark-mode") === "true") {
    dark_mode()

    for (let i = 0; i < botoes.length; i++) {
        botoes[i].firstChild.src = img_botao
    }
    for (let i = 0; i < botoes_pequenos.length; i++) {
        botoes_pequenos[i].firstChild.src = img_minibotao
    }
    botao_tema.firstChild.src = img_botaotema
}
else {
    normal_mode()

    for (let i = 0; i < botoes.length; i++) {
        botoes[i].firstChild.src = img_botao
    }
    for (let i = 0; i < botoes_pequenos.length; i++) {
        botoes_pequenos[i].firstChild.src = img_minibotao
    }
    botao_tema.firstChild.src = img_botaotema
}

function enable_disable_darkmode() {
    if (localStorage.getItem("dark-mode") === "true") {
        localStorage.setItem("dark-mode", "false");

        normal_mode()

        for (let i = 0; i < botoes.length; i++) {
            botoes[i].firstChild.src = img_botao
        }
        for (let i = 0; i < botoes_pequenos.length; i++) {
            botoes_pequenos[i].firstChild.src = img_minibotao
        }
        botao_tema.firstChild.src = img_botaotema
    }

    else {
        localStorage.setItem("dark-mode", "true");

        dark_mode()

        for (let i = 0; i < botoes.length; i++) {
            botoes[i].firstChild.src = img_botao
        }
        for (let i = 0; i < botoes_pequenos.length; i++) {
            botoes_pequenos[i].firstChild.src = img_minibotao
        }
        botao_tema.firstChild.src = img_botaotema
    }
}

// Buttons Hover
let btrack = 1
function b_hover(t) {
    if (btrack) {
        t.firstChild.src = img_botao_active
        btrack = 0

        if (t.id === "b1") {
            vanilla_animation_fade()
        }
        else if (t.id === "b2") {
            dungeons_animation_fade()
        }
    }
    else {
        t.firstChild.src = img_botao
        btrack = 1
    }
}
function bp_hover(t) {
    if (btrack) {
        t.firstChild.src = img_minibotao_active
        btrack = 0
    }
    else {
        t.firstChild.src = img_minibotao
        btrack = 1
    }
}
function bm_hover(t) {
    if (btrack) {
        t.firstChild.src = img_botaotema_active
        btrack = 0
    }
    else {
        t.firstChild.src = img_botaotema
        btrack = 1
    }
}

// Title Animation
let fundo_vanilla = document.querySelectorAll(".fill")[1]
let fundo_dungeons = document.querySelectorAll(".fill")[2]
let title = document.querySelector("#title")
function dungeons_animation_fade() {
    fundo_vanilla.style.animation = "fadeout 1.5s"

    title.src = "../images/title-dungeons.png"
    title.style.animation = "boince 1.5s"
    setTimeout(1500)
    
    fundo_vanilla.style.opacity = 0
    
    fundo_vanilla.pause()
    fundo_dungeons.play()
}
function vanilla_animation_fade() {
    fundo_vanilla.style.animation = "fadein 1.5s"
    
    title.src = "../images/title-vanilla.png"
    title.style.animation = "boince2 1.5s"
    setTimeout(1500)

    fundo_vanilla.style.opacity = 1

    fundo_vanilla.play()
    fundo_dungeons.pause()
}