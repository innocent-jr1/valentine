const noBtn = document.getElementById("noBtn");
const yesBtn = document.querySelector(".yes");
const response = document.getElementById("response");
const music = document.getElementById("bgMusic");

let scale = 1;

// Start music on first user interaction (mobile-friendly)
document.body.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });

// NO button runs away and shrinks
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

function moveNoButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    scale -= 0.1;
    if (scale < 0.3) scale = 0.3;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.transform = `scale(${scale})`;
}

// YES button success
yesBtn.addEventListener("click", () => {
    response.innerHTML = "YAAAY!! 💕 I knew it 😍❤️";
    music.volume = 0.5;
});
