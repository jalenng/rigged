// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", function () {
  const a = new Entity("duck", "Duck.png", { x: 10, y: 10 }, () => {
    console.log("test succcess");
  });
  const b = new Entity("bathtub", "BathTUb.png", { x: 110, y: 110 }, () => {
    console.log("test succcess");
  });
  const c = new Entity("bomb", "Bomb.png", { x: 210, y: 210 }, () => {
    console.log("test succcess");
  });
});
