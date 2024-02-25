// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", function () {
  const entityManager = new EntityManager();

  entityManager.add(new Entity("scissors", "Scissors.png", { x: 10, y: 10 }));

  entityManager.add(
    new Entity("package", "Package.png", { x: 300, y: 300 }, ({ from }) => {
      if (from === "scissors") {
        console.log(entityManager.getEntity("package"));
        entityManager.getEntity("package").remove();
        entityManager.getEntity("scissors").remove();
        entityManager.add(new Entity("bomb", "Bomb.png", { x: 210, y: 210 }));
      }
    })
  );
});
