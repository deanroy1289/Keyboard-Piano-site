
document.querySelectorAll(".key").forEach(key => {
    key.addEventListener("keydown", function() {
        let keyCode = this.getAttribute("data-value");
        playSound(keyCode);
    });
});

window.addEventListener("keydown", function(e) {
    playSound(e.keyCode);
});

function playSound(keyCode) {
    const key = document.querySelector(`.key[data-value="${keyCode}"]`);
    const audio = document.querySelector(`audio[data-value="${keyCode}"]`);

    if (!audio) return; // If no audio file exists, exit function

    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");

    setTimeout(() => {
        key.classList.remove("playing");
    }, 200); // Remove class after 200ms to reset animation
}
