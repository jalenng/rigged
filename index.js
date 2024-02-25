// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", function () {

  const draggableElements = document.querySelectorAll(".draggable");
  draggableElements.forEach((elem) => {
    elem.addEventListener('dragstart', (event) => {
      event.dataTransfer.setDragImage(new Image(), 0, 0);
    })
    elem.addEventListener('dragenter', (event) => {
      console.log('dragenter', event);
    })
    elem.addEventListener('drag', (event) => {
      console.log('drag', event);
      const draggedElement = event.target;
      const x = event.clientX - draggedElement.clientWidth / 2;
      const y = event.clientY - draggedElement.clientHeight / 2;

      draggedElement.style.left = x + 'px';
      draggedElement.style.top = y + 'px';
    })
  })


  const droppableElements = document.querySelectorAll(".droppable");
  droppableElements.forEach((elem) => {
    elem.addEventListener("dragover", (event) => {
      // allow drop
      event.preventDefault();
    });
    elem.addEventListener('drop', (event) => {
      console.log('drop',event);
    });
    
  })
});
