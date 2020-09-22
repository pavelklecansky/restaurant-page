const contact = (() => {
  const createContact = () => {
    const contact = document.createElement("article");
    contact.classList.add("article", "contact");
    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Contact";
    contact.appendChild(contactTitle);

    const restaurant = document.createElement("h3");
    restaurant.textContent = "Restaurant";
    contact.appendChild(restaurant);

    const address = document.createElement("h4");
    address.textContent = "Komenského 1504 Telc";
    contact.appendChild(address);

    const tel = document.createElement("h4");
    tel.textContent = "Tel: 738 034 673";
    contact.appendChild(tel);

    const email = document.createElement("h4");
    email.textContent = "fake@fake.cz";
    contact.appendChild(email);

    return contact;
  };
  const render = () => createContact();
  return { render };
})();

export { contact };
