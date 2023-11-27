import "./style.css";
import header from "./components/header/index.js";
import footer from "./components/footer/index.js";
import homePage from "./pages/home.js";
import menuPage from "./pages/menu.js";
import contactPage from "./pages/contact.js";

const pages = {
  home: { title: "Home", page: homePage },
  menu: { title: "Menu", page: menuPage },
  contact: { title: "Contact", page: contactPage },
};

const body = document.querySelector("#content");
body.appendChild(header(pages));
body.appendChild(main());
body.appendChild(footer());

init();
handleNavClick();

function main() {
  const element = document.createElement("div");
  element.classList.add("main");

  const container = document.createElement("div");
  container.classList.add("container");
  element.appendChild(container);

  return element;
}

function init() {
  const content = document.querySelector(".main .container");
  const homeNav = document.querySelector(".navigator .item[data-id='home']");
  homeNav.classList.add("active");
  content.appendChild(homePage());
}

function handleNavClick() {
  const content = document.querySelector(".main .container");
  const nav = document.querySelectorAll(".navigator .item");

  nav.forEach((item) => {
    item.addEventListener("click", () => {
      content.innerHTML = "";
      nav.forEach((i) => i.classList.remove("active"));

      item.classList.add("active");
      const page = pages[item.dataset.id].page;
      content.appendChild(page());
    });
  });
}
