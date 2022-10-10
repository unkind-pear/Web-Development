var x = 0;
var y = 0;

window.addEventListener("keydown", (event) => {
    if (event.key == "w") {
        y -= 10
        document.getElementById('muda').style.transform = `translate(${x}px, ${y}px)`;
    }
});
window.addEventListener("keydown", (event) => {
    if (event.key == "s") {
        y += 10
        document.getElementById('muda').style.transform = `translate(${x}px, ${y}px)`;
    }
});
window.addEventListener("keydown", (event) => {
    if (event.key == "a") {
        x -= 10
        document.getElementById('muda').style.transform = `translate(${x}px, ${y}px)`;
    }
});
window.addEventListener("keydown", (event) => {
    if (event.key == "d") {
        x += 10
        document.getElementById('muda').style.transform = `translate(${x}px, ${y}px)`;
    }
});
