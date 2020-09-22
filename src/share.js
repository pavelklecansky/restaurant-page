const header = (() => {
  const createNavbar = () => {
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const homeLi = document.createElement("li");
    const menuLi = document.createElement("li");
    const contactLi = document.createElement("li");
    const homeA = document.createElement("a");
    homeA.textContent = "Home";
    homeA.id = "homeTab";
    const menuA = document.createElement("a");
    menuA.textContent = "Menu";
    menuA.id = "menuTab";
    const contactA = document.createElement("a");
    contactA.textContent = "Contact";
    contactA.id = "contactTab";

    homeLi.appendChild(homeA);
    menuLi.appendChild(menuA);
    contactLi.appendChild(contactA);
    ul.append(homeLi, menuLi, contactLi);
    nav.appendChild(ul);

    return nav;
  };

  const createTitle = () => {
    const divTitle = document.createElement("div");
    divTitle.classList.add("title");
    const h1 = document.createElement("h1");
    h1.textContent = "Czech traditional food";

    divTitle.appendChild(h1);
    return divTitle;
  };

  const render = () => {
    const header = document.createElement("header");
    header.appendChild(createNavbar());
    header.appendChild(createTitle());
    return header;
  };
  return { render };
})();

const footer = (() => {
  const createFooter = () => {
    const footerElement = document.createElement("footer");
    const aElement = document.createElement("a");
    aElement.href = "https://github.com/pavelklecansky";
    const githubMark = document.createElement("img");
    githubMark.src = "./GitHub-Mark-Light-32px.png";
    githubMark.alt = "github logo";
    const pElement = document.createElement("p");
    pElement.textContent = "Made with ❤️ by Pavel Klečanský";
    aElement.appendChild(githubMark);
    footerElement.append(aElement, pElement);
    return footerElement;
  };

  const render = () => createFooter();
  return { render };
})();

export { footer, header };
