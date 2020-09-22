window.addEventListener("scroll", () => {
  if (window.scrollY) {
    document.querySelector("nav").classList.add("black");
  } else {
    console.log("test");
    document.querySelector("nav").classList.remove("black");
  }
});
