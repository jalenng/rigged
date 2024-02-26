function showWigglyText(div, text, wigglyDoneCb) {
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
      wigglyDoneCb();
    }
  }, 50);
}

function createWigglyTextDiv(width, height, text, wigglyDoneCb) {
  const wiggly = document.createElement("div");
  wiggly.style.width = `${width}px`;
  wiggly.style.height = `${height}px`;
  showWigglyText(wiggly, text, wigglyDoneCb);
  return wiggly;
}

function createContinueButton(text) {
  const continueButton = document.createElement("div");
  continueButton.innerText = text || "continue";
  continueButton.className = "continue-button";
  return continueButton;
}

function showEnding(entityManager, Entity) {
  document.querySelector(".game-area").style.backgroundColor = "black";
  const createText1 = () => {
    const wiggly = createWigglyTextDiv(250, 120, "Why did you do that?", () => {
      entityManager.add(
        new Entity("continue", createContinueButton(), { x: 400, y: 300 })
      );
    });
    entityManager.add(
      new Entity("text1", wiggly, { x: 200, y: 200 }, ({ from }) => {
        if (from === "continue") {
          entityManager.getEntity("text1").remove();
          entityManager.getEntity("continue").remove();
          createText2();
          ripSound.play();

          return true;
        }
      })
    );
  };

  const createText2 = () => {
    const wiggly = createWigglyTextDiv(
      400,
      120,
      "What was the point to all this?",
      () => {
        entityManager.add(
          new Entity("continue", createContinueButton(), { x: 400, y: 300 })
        );
      }
    );
    entityManager.add(
      new Entity("text2", wiggly, { x: 150, y: 200 }, ({ from }) => {
        if (from === "continue") {
          entityManager.getEntity("text2").remove();
          entityManager.getEntity("continue").remove();
          createText3();
          ripSound.play();

          return true;
        }
      })
    );
  };

  const createText3 = () => {
    const wiggly = createWigglyTextDiv(
      400,
      120,
      "You spent your entire life putting things together, mixing things.",
      () => {
        entityManager.add(
          new Entity(
            "continue",
            createContinueButton("You spent your life defusing a bomb."),
            { x: 150, y: 300 }
          )
        );
      }
    );
    entityManager.add(
      new Entity("text2", wiggly, { x: 150, y: 200 }, ({ from }) => {
        if (from === "continue") {
          entityManager.getEntity("text2").remove();
          entityManager.getEntity("continue").remove();
          createText4();
          ripSound.play();

          return true;
        }
      })
    );
  };

  const createText4 = () => {
    const wiggly = createWigglyTextDiv(
      400,
      120,
      "Look at you, mister bomb defuser",
      () => {
        entityManager.add(
          new Entity(
            "continue",
            createContinueButton("You know your cousin's a doctor right?"),
            { x: 150, y: 300 }
          )
        );
      }
    );
    entityManager.add(
      new Entity("text2", wiggly, { x: 50, y: 150 }, ({ from }) => {
        if (from === "continue") {
          entityManager.getEntity("text2").remove();
          entityManager.getEntity("continue").remove();
          createText5();
          ripSound.play();

          return true;
        }
      })
    );
  };

  const createText5 = () => {
    const wiggly = createWigglyTextDiv(
      400,
      120,
      "How much money is he making?",
      () => {
        entityManager.add(
          new Entity("continue", createContinueButton("Uhm.. What?"), {
            x: 400,
            y: 300,
          })
        );
      }
    );
    entityManager.add(
      new Entity("text2", wiggly, { x: 150, y: 200 }, ({ from }) => {
        if (from === "continue") {
          entityManager.getEntity("text2").remove();
          entityManager.getEntity("continue").remove();
          createText6();
          ripSound.play();

          return true;
        }
      })
    );
  };

  const createText6 = () => {
    const wiggly = createWigglyTextDiv(
      400,
      120,
      "Did you know the bomb was always going to explode?",
      () => {
        entityManager.add(
          new Entity(
            "continue",
            createContinueButton("It was always rigged."),
            {
              x: 400,
              y: 300,
            }
          )
        );
      }
    );
    entityManager.add(
      new Entity("text2", wiggly, { x: 150, y: 200 }, ({ from }) => {
        if (from === "continue") {
          entityManager.getEntity("text2").remove();
          entityManager.getEntity("continue").remove();
          createText7();
          ripSound.play();

          return true;
        }
      })
    );
  };

  const createText7 = () => {
    const wiggly = createWigglyTextDiv(
      400,
      120,
      "Would you have done things",
      () => {
        entityManager.add(
          new Entity("continue", createContinueButton("differently?"), {
            x: 400,
            y: 300,
          })
        );
      }
    );
    entityManager.add(
      new Entity("text2", wiggly, { x: 150, y: 200 }, ({ from }) => {
        if (from === "continue") {
          entityManager.getEntity("text2").remove();
          entityManager.getEntity("continue").remove();
          ripSound.play();

          riggedMusic.fade(0, 0.2, 1);
          riggedMusic.rate(1);
          riggedEndingMusic.fade(0.2, 0, 1);
          showDuckHatch();

          return true;
        }
      })
    );
  };

  createText1();
  // createText7();
}

// showEnding();
