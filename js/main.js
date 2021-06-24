"use strict";

let html = document.querySelector("html");
let body = document.querySelector("body");
let wrap = document.querySelector(".wrap");
let sideBar = document.querySelector(".sidebar");
let navbar = document.querySelector(".navbar");
let burgerBtn = sideBar.querySelector(".burger__btn");
let navBurgerBtn = navbar.querySelector(".burger__btn");
let closeMenuBtn = sideBar.querySelector(".close__btn");
let main = document.querySelector(".main");

burgerBtn.addEventListener("click", () => {
  sideBar.classList.toggle("mini");
  main.classList.toggle("max");
});

navBurgerBtn.addEventListener("click", () => {
  sideBar.classList.add("active");
  body.classList.add("locked");
  html.classList.add("locked");
  wrap.classList.add("locked");
});
closeMenuBtn.addEventListener("click", () => {
  sideBar.classList.remove("active");
  body.classList.remove("locked");
  html.classList.remove("locked");
  wrap.classList.remove("locked");
  console.log("close");
});

// menu and submenu lists settings

let menuLinksArr = [...document.querySelectorAll(".menu__link")];
let submenusArr = [...document.querySelectorAll(".submenu__list")];

menuLinksArr.forEach((link) => {
  let linkId = link.getAttribute("linkname");
  link.addEventListener("click", () => {
    for (let i = 0; i < submenusArr.length; i++) {
      submenusArr[i].classList.remove("active");
      let submenuId = submenusArr[i].getAttribute("id");
      if (submenuId == linkId) {
        submenusArr[i].classList.add("active");
      }
    }
  });
});

//change language and page direction

console.log(window.innerWidth);

let selectBlock = document.querySelector(".languages");
let lanuagesArr = [...selectBlock.querySelectorAll(".option")];

let changeLanguageTitle = () => {
  if (window.innerWidth < 576) {
    lanuagesArr[0].label = "He";
    lanuagesArr[1].label = "En";
  } else {
    lanuagesArr[0].label = "עברית";
    lanuagesArr[1].label = "English";
  }
};

changeLanguageTitle();

window.addEventListener("resize", changeLanguageTitle);

selectBlock.addEventListener("change", (e) => {
  let val = e.srcElement.value;
  wrap.classList.remove("rtl");
  html.removeAttribute("dir");
  e.srcElement.attributes[0].nodeValue = "";

  if (val == "false") {
    wrap.classList.add("rtl");
    e.srcElement.attributes[0].nodeValue = "rtl";
    html.setAttribute("dir", "rtl");
  }
});

//Mobile view

window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
