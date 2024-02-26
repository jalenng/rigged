function showDuckHatch() {
  const duckEgg = document.createElement("div");
  duckEgg.className = "duck-egg";
  document.querySelector(".game-area").appendChild(duckEgg);

  let lastTime = Date.now();
  let stage = 0;

  let duckEggVelY = 1.2;
  let duckEggY = 0;
  let duckEggRotate = 100;

  let eggLeft;
  let eggRight;
  let bird;

  let duckEggHalfVelY = 0.9;
  let duckEggHalfX = 0;
  let duckEggHalfY = 0;
  let duckEggHalfRotate = 0;

  function duckHatchAnimation() {
    const now = Date.now();
    const dt = now - lastTime;
    lastTime = now;

    duckEggRotate += -0.25 * dt;
    duckEggVelY -= 0.005 * dt;
    duckEggY += duckEggVelY * dt;
    duckEgg.style.top = 100 - duckEggY + "px";
    duckEgg.style.transform = `rotate(${duckEggRotate}deg) translate(-5px, -10px)`;
    if (duckEggY < -150) {
      duckEgg.style.display = "none";

      if (!eggLeft) {
        eggLeft = document.createElement("div");
        eggLeft.className = "egg-left";
        document.querySelector(".game-area").appendChild(eggLeft);

        eggRight = document.createElement("div");
        eggRight.className = "egg-right";
        document.querySelector(".game-area").appendChild(eggRight);

        bird = document.createElement("div");
        bird.className = "bird";
        document.querySelector(".game-area").appendChild(bird);
      } else {
        duckEggHalfRotate += -0.25 * dt;
        duckEggHalfVelY -= 0.005 * dt;
        duckEggHalfX += 0.5 * dt;
        duckEggHalfY += duckEggHalfVelY * dt;
        eggLeft.style.top = 150 - duckEggHalfY + "px";
        eggLeft.style.left = 280 - duckEggHalfX + "px";
        eggLeft.style.transform = `rotate(${duckEggHalfRotate}deg)`;
        eggRight.style.top = 150 - duckEggHalfY + "px";
        eggRight.style.left = 280 + duckEggHalfX + "px";
        eggRight.style.transform = `rotate(${-duckEggHalfRotate}deg)`;
      }
    }

    requestAnimationFrame(duckHatchAnimation);
  }
  duckHatchAnimation();
}
