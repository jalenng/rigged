function showEarthExplosion(entityManager, Entity) {
  const stars = [];

  const earthFake = document.createElement("div");
  earthFake.className = "earth-fake";

  const bigBang = document.createElement("div");
  bigBang.className = "big-bang";

  const rainbowEarth = document.createElement("div");
  rainbowEarth.className = "rainbow-earth";

  document.querySelector(".game-area").appendChild(earthFake);
  document.querySelector(".game-area").appendChild(bigBang);
  document.querySelector(".game-area").appendChild(rainbowEarth);

  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    stars.push({
      star,
      direction: Math.random() * Math.PI * 2,
      timeAlive: Math.random() * 500,
    });
    rainbowEarth.appendChild(star);
  }

  let lastTime = Date.now();
  function starAnimation() {
    const now = Date.now();
    const dt = now - lastTime;
    lastTime = now;
    for (let star of stars) {
      let centerX = 200 / 2;
      let centerY = 200 / 2;
      let velX = Math.cos(star.direction);
      let velY = Math.sin(star.direction);
      function sinPee(i) {
        return Math.sin(i / (Math.PI*2) - Math.PI/2) / 2 + 0.5
      }
      star.star.style.left = centerX + velX * (star.timeAlive) + "px";
      star.star.style.top = centerY + velY * (star.timeAlive) + "px";
      star.star.style.opacity = sinPee(star.timeAlive / 10) * sinPee(star.timeAlive / 10);
      star.timeAlive += dt * 0.2;
      // console.log(centerX + velX * star.timeAlive);
      // console.log(star.timeAlive);
      if (star.timeAlive > 500) {
        star.timeAlive = 0;
      }
    }
    requestAnimationFrame(starAnimation);
  }
  starAnimation();
}
