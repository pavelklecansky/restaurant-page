window.addEventListener("scroll", () => {
  if (window.scrollY) {
    document.querySelector("nav").classList.add("black");
  } else {
    document.querySelector("nav").classList.remove("black");
  }
});

const content = document.querySelector("#content");

const header = (() => {
  const createNavbar = () => {
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const homeLi = document.createElement("li");
    const menuLi = document.createElement("li");
    const contactLi = document.createElement("li");
    const homeA = document.createElement("a");
    homeA.textContent = "Home";
    const menuA = document.createElement("a");
    menuA.textContent = "Menu";
    const contactA = document.createElement("a");
    contactA.textContent = "Contact";

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

const article = (() => {
  const createArticle = () => {
    const articleDiv = document.createElement("div");
    articleDiv.classList.add("article");
    const firstP = document.createElement("p");
    firstP.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
    a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
    of Lorem Ipsum.`;
    const secondP = document.createElement("p");
    secondP.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
    a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
    of Lorem Ipsum.`;
    articleDiv.append(firstP, secondP);
    return articleDiv;
  };
  const render = () => createArticle();
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

content.appendChild(header.render());
content.appendChild(article.render());
content.appendChild(footer.render());
