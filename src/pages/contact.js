function component() {
  const element = document.createElement("div");
  element.classList.add("contact-content");

  const container = document.createElement("div");
  container.classList.add("page-container");

  const content = document.createElement("h1");
  content.textContent = "Contact Page";

  container.appendChild(content);
  element.appendChild(container);

  return element;
}

export default component;
