const buttonMenuHeader = document.querySelector("#header-button");
const navMenu = document.querySelector("#nav-menu");
const buttonUP = document.querySelector("button-up");

var position = true;
buttonMenuHeader.addEventListener("click", () => {
  if (position === true) {
    navMenu.style.display = "block";
    position = false;
    console.log(position);
  } else {
    navMenu.style.display = "none";
    position = true;
    console.log(position);
  }
});

navMenu.addEventListener("click", () => {
  navMenu.style.display = "none";
  position = true;
});

if (window.matchMedia("(min-width: 700px)")) {
  navMenu.style.display = "block";
}
