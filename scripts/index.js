// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", function () {
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
    const bathTubPos = 
    entityManager.add(
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
            
            spawnEgg()
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
      new Entity("nest", "nest.png", {
        x: 411,
        y: 92,
      })
    );
  }

  // START
  setTimeout(spawnScissors, 1000);
  spawnPackage();
});
