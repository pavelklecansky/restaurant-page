import { article } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
import * as share from "./share";

window.addEventListener("scroll", () => {
  if (window.scrollY) {
    document.querySelector("nav").classList.add("black");
  } else {
    document.querySelector("nav").classList.remove("black");
  }
});

const content = document.querySelector("#content");
const header = share.header.render();
const footer = share.footer.render();

content.appendChild(header);
content.appendChild(article.render());
content.appendChild(footer);

const homeTab = header.querySelector("#homeTab");
homeTab.addEventListener("click", () => {
  content.innerHTML = "";
  console.log("Home");
  content.appendChild(header);
  content.appendChild(article.render());
  content.appendChild(footer);
});

const menuTab = header.querySelector("#menuTab");
menuTab.addEventListener("click", () => {
  content.innerHTML = "";
  console.log("Menu");
  content.appendChild(header);
  content.appendChild(menu.render());
  content.appendChild(footer);
});

const contactTab = header.querySelector("#contactTab");
contactTab.addEventListener("click", () => {
  content.innerHTML = "";
  console.log("Contact");
  content.appendChild(header);
  content.appendChild(contact.render());
  content.appendChild(footer);
});
