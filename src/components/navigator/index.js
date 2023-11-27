import "./style.css";

function component(pages) {
  const element = document.createElement("div");
  element.classList.add("navigator");

  for (let i in pages) {
    const item = document.createElement("button");
    item.classList.add("item");
    item.setAttribute("data-id", i);
    item.textContent = pages[i].title;

    element.appendChild(item);
  }

  return element;
}

export default component;
