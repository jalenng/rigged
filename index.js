// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", function () {
  const draggableElements = document.querySelectorAll(".draggable");

  draggableElements.forEach((elem) => {

    // remember initial pos
    elem.setAttribute("data-initial-left", elem.style.left || 0);
    elem.setAttribute("data-initial-top", elem.style.top || 0);


    elem.addEventListener("dragstart", (event) => {
      const elem = event.target
      event.dataTransfer.setDragImage(new Image(), 0, 0);
      elem.style.zIndex = 1000;
    });

    elem.addEventListener("dragenter", (event) => {
      console.log("dragenter", event);
    });

    elem.addEventListener("drag", (event) => {
      console.log("drag", event);
      const draggedElement = event.target;
      const x = event.clientX - draggedElement.clientWidth / 2;
      const y = event.clientY - draggedElement.clientHeight / 2;

      draggedElement.style.left = x + "px";
      draggedElement.style.top = y + "px";
    });

    elem.addEventListener("dragend", (event) => {
      console.log("dragend", event);
      const draggedElement = event.target;
      
      const initialLeft = elem.getAttribute("data-initial-left");
      const initialTop = elem.getAttribute("data-initial-top");
      
      draggedElement.style.left = initialLeft + "px";
      draggedElement.style.top = initialTop + "px";
    });
  });

  const droppableElements = document.querySelectorAll(".droppable");
  droppableElements.forEach((elem) => {
    elem.addEventListener("dragover", (event) => {
      // allow drop
      event.preventDefault();
    });
    elem.addEventListener("drop", (event) => {
      console.log("drop", event);
    });
  });
});
