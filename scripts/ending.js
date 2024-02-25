function showWigglyText(div, text) {
  // Shows wiggly text inside of a div.
  const characters = text.split("");
  console.log(characters);

  const interval = setInterval(() => {
    const charSpan = document.createElement("span");
    charSpan.textContent = characters.shift();
    if (charSpan.textContent === " ") {
      charSpan.textContent = "\u00A0";
    }
    charSpan.className = "wiggly";
    charSpan.style.animationDelay = `-${Math.random() * 10}s`;
    div.appendChild(charSpan);
    if (characters.length === 0) {
      clearInterval(interval);
    }
  }, 100);
}

function showEnding() {
  const wiggly = document.createElement("div");
  showWigglyText(wiggly, "Why did you do   that?");
  wiggly.style.position = "absolute";
  wiggly.style.top = "200px";
  wiggly.style.left = "400px";
  wiggly.style.width = "120px";
  wiggly.style.zIndex = 1000;
  document.body.appendChild(wiggly);
}

showEnding();
