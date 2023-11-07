document.addEventListener(
  "DOMContentLoaded",
  function () {
    const header = document.querySelector(".header");
    const headerMessage = document.querySelector(".header-message");
    const headerMessageClose = document.querySelector(".header-message__close");

    headerMessageClose.addEventListener("click", (e) => {
      headerMessage.classList.remove("active");
      header.classList.remove("active");
    });

    const inputIcon = document.querySelector(".input-icon");
    const searchInput = document.querySelector(".search__input");

    searchInput.onfocus = function () {
      inputIcon.style.opacity = "0";
    };
    searchInput.onblur = function () {
      if (searchInput.value == "") {
        inputIcon.style.opacity = "1";
      }
    };

    const hasSubmenu = document.querySelectorAll(".has-submenu");
    const topSubmenu = document.querySelectorAll(".top-submenu");

    for (let i = 0; i < hasSubmenu; i++) {
      hasSubmenu[i].addEventListener("click", (e) => {
        console.log(i);
        topSubmenu[i].style.opacity = "1";
        topSubmenu[i].style.visibility = "visible";
      });
    }

    const hamburger = document.querySelector(".hamburger");
    const headerTopMenu = document.querySelector(".header-top__menu");

    hamburger.addEventListener("click", (e) => {
      headerTopMenu.style.opacity = "1";
      headerTopMenu.style.visibility = "visible";
      if (hamburger.classList.contains("active-menu")) {
        hamburger.classList.remove("active-menu");
        headerTopMenu.style.opacity = "0";
        headerTopMenu.style.visibility = "hidden";
      } else {
        hamburger.classList.add("active-menu");
      }
    });
  },
  false
);
