import "./style.css";
import navigator from "../navigator/index.js";
import Logo from "../../assets/logo.jpeg";

const brand = () => {
  const block = document.createElement("div");
  block.classList.add("brand");

  const myLogo = new Image();
  myLogo.classList.add("logo");
  myLogo.src = Logo;
  block.appendChild(myLogo);

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Luca café";
  block.appendChild(title);
  return block;
};

function component() {
  const element = document.createElement("header");
  element.classList.add("header");

  const container = document.createElement("div");
  container.classList.add("container");

  container.appendChild(brand());
  container.appendChild(navigator());

  element.appendChild(container);

  return element;
}

export default component;
