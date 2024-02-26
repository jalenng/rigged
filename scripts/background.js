const background = document.createElement("div");
background.className = "background";
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".game-area").appendChild(background);
});

let backgroundQueued = "";
let backgroundDirection = "fade-in";
let backgroundOpacity = 1;
function showBackgroundImage(url) {
  backgroundDirection = "fade-out";
  backgroundQueued = url;
}
let lastTime = Date.now();
function backgroundTransitionAnimation() {
  const now = Date.now();
  const dt = now - lastTime;
  lastTime = now;
  if (backgroundDirection === "fade-in" && backgroundOpacity < 1) {
    backgroundOpacity += dt / 500;
    if (backgroundOpacity > 1) {
      backgroundOpacity = 1;
    }
  } else if (backgroundDirection === "fade-out" && backgroundOpacity > 0) {
    backgroundOpacity -= dt / 500;
    if (backgroundOpacity < 0) {
      backgroundOpacity = 0;
      backgroundDirection = "fade-in";
      background.style.backgroundImage = `url(${backgroundQueued})`;
    }
  }
  background.style.opacity = backgroundOpacity * 0.2;
  requestAnimationFrame(backgroundTransitionAnimation);
}
backgroundTransitionAnimation();
