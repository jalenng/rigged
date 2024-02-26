// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", function () {
  let boatContains = [];
  let boatContainsEverything = false;

  const entityManager = new EntityManager();

  function spawnScissors() {
    entityManager.add(new Entity("scissors", "scissors.png", { x: 60, y: 20 }));
  }

  function spawnPackage() {
    entityManager.add(
      // show package
      new Entity(
        "package",
        "package.png",
        { x: 300, y: 180 },
        ({ from, to }) => {
          // scissors --> package
          if (from === "scissors") {
            console.log(entityManager.getEntity("package"));
            entityManager.getEntity(from).remove();
            entityManager.getEntity(to).remove();
            entityManager.getEntity("rock").remove(); // useless item
            ripSound.play();

            // start earthquake
            document.querySelector(".game-area").classList.add("shake");

            bombSound.play();
            spawnBomb();
            setTimeout(spawnFireExtinguisher, 1000);
            showBackgroundImage("./images/livingroom.png");

            // document.querySelector(".game-area").appendChild();
            return true;
          }
        }
      )
    );
  }

  function spawnFireExtinguisher() {
    entityManager.add(
      new Entity("fireExtinguisher", "fireExtinguisher.png", {
        x: 500,
        y: 50,
      })
    );
  }

  function spawnOven() {
    entityManager.add(
      new Entity(
        "oven",
        "oven.png",
        {
          x: 420,
          y: 69,
        },
        ({ from, to }) => {
          if (from === "ice") {
            entityManager.getEntity(from).remove();
            entityManager.getEntity(to).remove();
            entityManager.getEntity("pie").remove(); // useless item

            spawnCookedDuck();
            ovenSound.play();
            setTimeout(spawnToyBox, 1000);
            showBackgroundImage("./images/toyroom.png");
            return true;
          }
        }
      )
    );
  }

  function spawnBomb() {
    entityManager.add(
      new Entity("bomb", "bomb.png", { x: 300, y: 180 }, ({ from, to }) => {
        if (from === "fireExtinguisher") {
          // fire extinguisher --> bomb
          entityManager.getEntity(from).remove();
          entityManager.getEntity(to).remove();

          spawnIce();
          setTimeout(spawnPie, 1000); // useless item
          setTimeout(spawnOven, 2000);
          freezingBombSound.play();
          showBackgroundImage("./images/bathroom.png");
          return true;
        }
      })
    );
  }

  function spawnIce() {
    entityManager.add(new Entity("ice", "ice.png", { x: 300, y: 180 }));
  }

  function spawnCookedDuck() {
    entityManager.add(
      new Entity("cookedDuck", "cookedDuck.png", {
        x: 420,
        y: 69,
      })
    );
  }

  function spawnToyBox() {
    entityManager.add(
      new Entity(
        "toybox",
        "toybox.png",
        {
          x: 483,
          y: 333,
        },
        ({ from, to }) => {
          if (from === "cookedDuck") {
            entityManager.getEntity(from).remove();
            entityManager.getEntity(to).remove();

            spawnBathtub();
            toyboxSound.play();
            setTimeout(spawnDuck, 1000);
            showBackgroundImage("./images/bathroom.png");
            return true;
          }
        }
      )
    );
  }

  function spawnDuck() {
    entityManager.add(
      new Entity(
        "duck",
        "duck.png",
        {
          x: 483,
          y: 333,
        },
        ({ from, to }) => {
          if (from === "cookedDuck") {
            entityManager.getEntity(from).remove();
            entityManager.getEntity(to).remove();

            spawnDuck();
            setTimeout(spawnNest, 1000);
            return true;
          }
        }
      )
    );
  }

  function spawnBathtub() {
    const bathTubPos = entityManager.add(
      new Entity(
        "bathtub",
        "bathtub.png",
        {
          x: 283,
          y: 333,
        },
        ({ from, to }) => {
          if (from === "duck") {
            entityManager.getEntity(from).remove();
            entityManager.getEntity(to).remove();

            spawnEgg();
            setTimeout(spawnNest, 1000);
            setTimeout(spawnDuckNoFuse, 2000); // useless item
            tubSound.play();
            showBackgroundImage("./images/forest.png");
            return true;
          }
        }
      )
    );
  }

  function spawnEgg() {
    entityManager.add(
      new Entity("egg", "egg.png", {
        x: 283,
        y: 333,
      })
    );
  }

  function spawnNest() {
    entityManager.add(
      new Entity("nest", "nest.png", { x: 100, y: 190 }, ({ from, to }) => {
        if (from === "egg") {
          entityManager.getEntity(from).remove();
          entityManager.getEntity(to).remove();
          entityManager.getEntity("duckNoFuse").remove(); // useless item

          setTimeout(spawnCabbage);
          setTimeout(spawnGoat, 250);
          setTimeout(spawnWolf, 500);
          setTimeout(spawnIsland, 750);
          setTimeout(spawnBoat, 1000);
          nestSound.play();
          showBackgroundImage("./images/ocean.png");
          return true;
        }
      })
    );
  }

  function spawnCabbage() {
    entityManager.add(
      new Entity("cabbage", "cabbage.png", {
        x: 100,
        y: 90,
      })
    );
  }

  function spawnGoat() {
    entityManager.add(
      new Entity("goat", "goat.png", {
        x: 100,
        y: 190,
      })
    );
  }

  function spawnWolf() {
    entityManager.add(
      new Entity("wolf", "wolf.png", {
        x: 100,
        y: 290,
      })
    );
  }

  function spawnBoat() {
    entityManager.add(
      new Entity(
        "boat",
        "boat.png",
        {
          x: 200,
          y: 190,
        },
        ({ from, to }) => {
          const allowedBoatItems = ["cabbage", "goat", "wolf"];
          if (allowedBoatItems.includes(from)) {
            entityManager.getEntity(from).remove();
            boatContains.push(from);
            const nameToOverlayImageMap = {
              cabbage: "cabbageOnBoat.png",
              goat: "goatOnBoat.png",
              wolf: "wolfOnBoat.png",
            };
            const overlayImage = nameToOverlayImageMap[from];
            if (overlayImage) {
              entityManager.getEntity(to).addOverlayImage(overlayImage);
            }

            if (from === "cabbage") {
              cabbageSound.play();
            } else if (from === "goat") {
              goatSound.play();
            } else if (from === "wolf") {
              wolfSound.play();
            }

            // check if boat has everything needed
            if (allowedBoatItems.every((item) => boatContains.includes(item))) {
              boatContainsEverything = true;
            }
            return true;
          }
        }
      )
    );
  }

  function spawnIsland() {
    entityManager.add(
      new Entity(
        "island",
        "island.png",
        {
          x: 520,
          y: 190,
        },
        ({ from, to }) => {
          if (from === "boat" && boatContainsEverything) {
            entityManager.getEntity(from).remove();
            entityManager.getEntity(to).remove();
            spawnEarth();
            setTimeout(spawnSun, 1000);
            showBackgroundImage("");
            boatSound.play();
            return true;
          }
        }
      )
    );
  }

  function spawnEarth() {
    entityManager.add(
      new Entity("earth", "earth.png", {
        x: 520,
        y: 190,
      })
    );
  }

  function spawnSun() {
    entityManager.add(
      new Entity(
        "sun",
        "sun.png",
        {
          x: 210,
          y: 100,
          width: 300,
        },
        ({ from, to }) => {
          console.log(from);
          if (from === "earth") {
            entityManager.getEntity(from).remove();
            entityManager.getEntity(to).remove();

            riggedMusic.fade(0.2, 0, 10000);
            riggedEndingMusic.play();
            riggedEndingMusic.fade(0, 0.2, 5000);
            showEarthExplosion();
            explosionSound.play();
            let rate = 1;
            const rateChanger = setInterval(() => {
              rate -= 0.005;
              if (rate < 0.01) {
                rate = 0.01;
              }
              riggedMusic.rate(rate);
            }, 100);
            setTimeout(() => {
              clearInterval(rateChanger);
              showEnding(entityManager, Entity);
            }, 7000);
            return true;
          }
        }
      )
    );
  }

  // here begins the functions for spawning the useless things...
  function spawnRock() {
    entityManager.add(
      new Entity("rock", "rock.png", {
        x: 600,
        y: 66,
      })
    );
  }

  function spawnPie() {
    entityManager.add(
      new Entity("pie", "pie.png", {
        x: 100,
        y: 190,
      })
    );
  }

  function spawnDuckNoFuse() {
    entityManager.add(
      new Entity("duckNoFuse", "duckNoFuse.png", {
        x: 93,
        y: 100,
      })
    );
  }

  // START
  function startLevel() {
    spawnPackage();
    setTimeout(spawnRock, 1000); // useless item
    setTimeout(spawnScissors, 2000);
  }

  showBackgroundImage("./images/title.png", 1);
  setTimeout(() => showBackgroundImage(""), 3000);
  setTimeout(startLevel, 4000);

  // spawnEgg();
  // spawnNest();
  // spawnEarth();
  // spawnSun();
  // showEarthExplosion(entityManager, Entity);
  // showEnding(entityManager, Entity);
});
