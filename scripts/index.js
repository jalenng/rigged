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

            // show fire extinguisher after delay
            setTimeout(spawnFireExtinguisher, 1000);

            // show bomb
            spawnBomb()
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

            // show cooked duck
            spawnCookedDuck();
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

          // show oven after delay
          setTimeout(spawnOven, 1000);

          // show ice
          spawnIce();
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

  // START
  setTimeout(spawnScissors, 1000);
  spawnPackage();
});
