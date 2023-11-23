import "./style.css";
import Logo from "./assets/logo.jpeg";

const body = document.querySelector("#content");

function component() {
  const element = document.createElement("div");
  element.innerHTML = "<h1>Luca cafe</h1>";
  console.log("pageeeee");

  const myLogo = new Image();
  myLogo.src = Logo;
  element.appendChild(myLogo);

  return element;
}
body.appendChild(component());
