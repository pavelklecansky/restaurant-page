window.addEventListener("scroll", () => {
  if (window.scrollY) {
    document.querySelector("nav").classList.add("black");
  } else {
    document.querySelector("nav").classList.remove("black");
  }
});
