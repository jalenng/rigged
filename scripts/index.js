// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", function () {
  let boatContains = [];
  let boatContainsEverything = false;

  const entityManager = new EntityManager();

  function spawnScissors() {
    entityManager.add(new Entity("scissors", "scissors.png", { x: 10, y: 10 }));
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
            ripSound.play();

            spawnBomb();
            setTimeout(spawnFireExtinguisher, 1000);
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

            spawnCookedDuck();
            setTimeout(spawnToyBox, 1000);
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
          setTimeout(spawnOven, 1000);
        }
      })
    );
  }

  function spawnIce() {
    entityManager.add(new Entity("ice", "Ice.png", { x: 300, y: 180 }));
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

            spawnDuck();
            setTimeout(spawnBathtub, 1000);
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

          setTimeout(spawnCabbage);
          setTimeout(spawnGoat, 250);
          setTimeout(spawnWolf, 500);
          setTimeout(spawnIsland, 750);
          setTimeout(spawnBoat, 1000);
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
          }
          // check if boat has everything needed
          if (allowedBoatItems.every((item) => boatContains.includes(item))) {
            boatContainsEverything = true;
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
      new Entity("sun", "sun.png", {
        x: 310,
        y: 190,
      }),
      ({ from, to }) => {
        if (from === "earth") {
          entityManager.getEntity(from).remove();
          entityManager.getEntity(to).remove();

          showEnding(entityManager, Entity);
        }
      }
    );
  }

  // START
  // setTimeout(spawnScissors, 1000);
  // spawnPackage();

  spawnEgg();
  spawnNest();
});
