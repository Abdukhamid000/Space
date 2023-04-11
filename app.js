const menu = document.querySelector("#mobile_menu");
const menuBtn = document
  .querySelector("#humberger")
  .addEventListener("click", (e) => {
    menu.classList.toggle("mobile");
  });
