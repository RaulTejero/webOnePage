const buttonMenuHeader = document.querySelector("#header-button");
const navMenu = document.querySelector("#nav-menu");

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
