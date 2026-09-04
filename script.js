const glitchVideo = document.getElementById("glitch-gif");
const glitchBox = document.getElementById("glitch");

let glitchTimer;

function checkGlitch() {
    if (window.location.hash !== "#glitch") {
        return;
    }
        
    document.querySelectorAll(".box").forEach(box => {
        box.style.display = "none";
    });

    glitchGif.style.display = "block";

    clearTimeout(glitchTimer);

    glitchTimer = setTimeout(() => {
        glitchGif.style.display = "none";
        glitchBox.style.display = "block";
    }, 3500);
}

window.addEventListener("hashchange", checkGlitch);
window.addEventListener("load", checkGlitch);