const rootElement = Document.querySelector(".foods");

const foodData = [
  {
    id: 1,
    image: "🌮",
    name: "taco"
  },
  {
    id: 1,
    image: "🍔",
    name: "Burger"
  },
  {
    id: 1,
    image: "🍕",
    name: "Pizza"
  },
  {
    id: 1,
    image: "🍎",
    name: "Apple"
  },
  {
    id: 1,
    image: "🍝",
    name: "Spegatti"
  }
];

class Foods {
  constructor(el, foodData) {
    this._root = el;
    this._data = foodData;
  }

  renderList() {
    this._root.addEventListener("click", event => {
      const { target } = event;
      target.remove();
    });
    const fragment = document.createDocumentFragment();
    this._data.forEach(i => {
      fragment.appendChild(this.createFoodItem(i));
    });

    this._root.appendChild(fragment);
  }

  createFoodItem(item) {
    const itemEl = document.createElement("div");
    itemEl.innerText = item.image;
    itemEl.classList.add(item.name);
    return itemEl;
  }
}

const myfood = new foods(rootElement, foodData);
