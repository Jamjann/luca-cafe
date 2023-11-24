import "./style.css";
import header from "./components/header/index.js";
import footer from "./components/footer/index.js";
import homePage from "./pages/home.js";
import menuPage from "./pages/menu.js";
import contactPage from "./pages/contact.js";

const body = document.querySelector("#content");

function component() {
  const element = document.createElement("header");
  element.classList.add("main");

  const container = document.createElement("div");
  container.classList.add("container");

  element.appendChild(container);

  return element;
}
body.appendChild(header());
body.appendChild(component());
body.appendChild(footer());
