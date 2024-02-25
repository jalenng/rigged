// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", function () {
  const draggableElements = document.querySelectorAll(".draggable");

  draggableElements.forEach((elem) => {
    // remember initial pos
    elem.setAttribute("data-initial-left", elem.style.left || 0);
    elem.setAttribute("data-initial-top", elem.style.top || 0);

    elem.addEventListener("dragstart", (event) => {
      const elem = event.target;
      elem.style.zIndex = 1000;
      elem.classList.add("dragging");
      const itemName = elem.getAttribute("data-item-name");
      event.dataTransfer.setData("text/plain", itemName);
    });

    elem.addEventListener("dragenter", (event) => {
      // console.log("dragenter", event);
    });

    elem.addEventListener("dragend", (event) => {
      // console.log("dragend", event);
      const draggedElement = event.target;

      const initialLeft = elem.getAttribute("data-initial-left");
      const initialTop = elem.getAttribute("data-initial-top");

      draggedElement.style.left = initialLeft;
      draggedElement.style.top = initialTop;
      elem.classList.remove("dragging");
    });
  });

  const droppableElements = document.querySelectorAll(".droppable");
  droppableElements.forEach((elem) => {
    elem.addEventListener("dragover", (event) => {
      // allow drop
      event.preventDefault();
    });
    elem.addEventListener("drop", (event) => {
      const from = event.dataTransfer.getData("text/plain");
      const to = event.target.getAttribute("data-item-name");
      console.log("drop", `${from} dragged onto ${to}`);
    });
  });
});
