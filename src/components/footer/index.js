import "./style.css";

function component() {
  const element = document.createElement("footer");
  element.classList.add("footer");

  const container = document.createElement("div");
  container.classList.add("container");

  element.appendChild(container);

  return element;
}

export default component;
