class Entity {
  constructor(name, image = "Bomb.png", pos = { x: 0, y: 0 }, onDrop) {
    // create elem
    const elem = document.createElement("div");
    this.elem = elem;

    const imgElem = document.createElement("img");
    imgElem.src = `./images/${image}`;
    elem.appendChild(imgElem);
    elem.classList.add("draggable");
    elem.classList.add("droppable");

    this.name = name;
    elem.setAttribute("data-item-name", name);
    elem.setAttribute("draggable", "true");

    // event listeners
    elem.addEventListener("dragover", this.handleDragOver.bind(this));
    elem.addEventListener("drop", this.handleDrop.bind(this));
    elem.addEventListener("dragstart", this.handleDragStart.bind(this));
    elem.addEventListener("dragend", this.handleDragEnd.bind(this));
    this.onDrop = onDrop;

    // remember initial pos
    this.setPos(pos);
    this.initialPos = pos;

    // TODO: improve
    document.querySelector(".game-area").appendChild(elem);

    console.log("created entity elem", this.elem);
  }

  handleDragStart(event) {
    const elem = event.target;
    elem.style.zIndex = 1000;
    elem.classList.add("dragging");
    const itemName = elem.getAttribute("data-item-name");
    event.dataTransfer.setData("text/plain", itemName);
  }

  handleDragEnd(event) {
    const elem = event.target;
    this.setPos(this.initialPos);
    elem.classList.remove("dragging");
  }

  handleDragOver(event) {
    // allow drop
    event.preventDefault();
  }

  handleDrop(event) {
    const from = event.dataTransfer.getData("text/plain");
    const to = event.target.getAttribute("data-item-name");
    console.log("drop", `${from} dragged onto ${to}`);
    this.onDrop?.({
      from,
      to,
    });
  }

  setPos(pos) {
    this.elem.style.left = `${pos.x}px`;
    this.elem.style.top = `${pos.y}px`;
  }

  remove(element) {
    // Remove the specified HTML element from its parent
    const elem = this.elem;
    const parent = elem?.parentNode;
    if (parent) {
      parent.removeChild(elem);
    }
  }
}
