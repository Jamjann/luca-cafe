import "./style.css";

const list = ["Home", "Menu", "Contact"];
function component() {
  const element = document.createElement("div");
  element.classList.add("navigator");

  list.forEach((i) => {
    const item = document.createElement("button");
    item.classList.add("item");
    item.textContent = i;

    element.appendChild(item);
  });

  return element;
}

export default component;
