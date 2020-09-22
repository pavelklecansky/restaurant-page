const menu = (() => {
  const createMenu = () => {
    const menu = document.createElement("article");
    menu.classList.add("article", "menu");
    const menuTitle = document.createElement("h2");
    menuTitle.textContent = "Menu";
    menu.appendChild(menuTitle);

    const soupTitle = document.createElement("h3");
    soupTitle.textContent = "Soup";
    const chickenSoup = document.createElement("h4");
    chickenSoup.textContent = "Chicken soup";
    const chickenSoupText = document.createElement("p");
    chickenSoupText.textContent = "with noodles, vegetable and homemade liver dumplings";
    menu.append(soupTitle, chickenSoup, chickenSoupText);

    const mainDishes = document.createElement("h3");
    mainDishes.textContent = "Main dishes";
    const roastDuck = document.createElement("h4");
    roastDuck.textContent = "Roast duck";
    const roastDuckText = document.createElement("p");
    roastDuckText.textContent =
      "duck leg roasted in lager until golden and served with bread, bacon and potato dumplings and red and white cabbage";
    const sirloin = document.createElement("h4");
    sirloin.textContent = "Traditional sirloin";
    const sirloinText = document.createElement("p");
    sirloinText.textContent = "from matured beef with vegetable-creamy sauce, dumplings and wild cranberries";
    const roastedKnee = document.createElement("h4");
    roastedKnee.textContent = "Roast knee";
    const roastedKneeText = document.createElement("p");
    roastedKneeText.textContent =
      "with onion, vegetables, spices and dark beer, served with gravy, fresh horseradish, pickles and hot peppers";
    menu.append(mainDishes, roastDuck, roastDuckText, sirloin, sirloinText, roastedKnee, roastedKneeText);

    return menu;
  };
  const render = () => createMenu();
  return { render };
})();

export { menu };
