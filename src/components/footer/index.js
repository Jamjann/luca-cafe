import "./style.css";

function component() {
  const element = document.createElement("footer");
  element.classList.add("footer");

  const container = document.createElement("div");
  container.classList.add("container");

  const license = document.createElement("h4");
  license.classList.add("license");
  license.textContent = "Luca de Schnauzer co.";
  container.appendChild(license);

  element.appendChild(container);

  return element;
}

export default component;
