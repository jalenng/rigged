// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", function () {
  const entityManager = new EntityManager();

  // show scissors
  entityManager.add(new Entity("scissors", "scissors.png", { x: 10, y: 10 }));

  entityManager.add(
    // show package
    new Entity("package", "package.png", { x: 300, y: 180 }, ({ from, to }) => {
      // scissors --> package
      if (from === "scissors") {
        console.log(entityManager.getEntity("package"));
        entityManager.getEntity(from).remove();
        entityManager.getEntity(to).remove();
        ripSound.play();
        
        // show fire extinguisher after delay
        setTimeout(() => {
          entityManager.add(
            new Entity("fireExtinguisher", "fireExtinguisher.png", {
              x: 500,
              y: 50,
            })
          );
        }, 1000);

        // show bomb
        entityManager.add(
          new Entity("bomb", "bomb.png", { x: 300, y: 180 }, ({ from, to }) => {
            if (from === "fireExtinguisher") {
              // fire extinguisher --> bomb
              entityManager.getEntity(from).remove();
              entityManager.getEntity(to).remove();

              // show oven after delay
              setTimeout(() => {
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
                        entityManager.add(
                          new Entity("cookedDuck", "cookedDuck.png", { x: 420, y: 69 })
                        );
                      }
                    }
                  )
                );
              }, 1000);

              // show ice
              entityManager.add(
                new Entity("ice", "Ice.png", { x: 300, y: 180 })
              );
            }
          })
        );
      }
    })
  );

  const wiggly = createWigglyTextDiv(120, 120, "Why did you do   that?");
  entityManager.add(new Entity("text1", wiggly, { x: 200, y: 200 }, ({ from }) => {
    if (from === "scissors") {
      console.log(entityManager.getEntity("package"));
      entityManager.getEntity("text1").remove();
      entityManager.getEntity("scissors").remove();
      entityManager.add(new Entity("bomb", "Bomb.png", { x: 210, y: 210 }));
      ripSound.play();
    }
  }));
});
