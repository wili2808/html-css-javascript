const main = document.querySelector("main");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const icon_menu = document.getElementById("icon-menu");
icon_menu.addEventListener("click", () => {
  barraLateral.classList.toggle("mini-barra-lateral");
  spans.forEach((span) => {
    span.classList.toggle("oculto");
  });
  main.classList.toggle("min-main");
});

const switch_darkmode = document.querySelector(".base");
const page = document.body;
const circulo = document.querySelector(".circulo");
switch_darkmode.addEventListener("click", () => {
  page.classList.toggle("dark-mode");
  circulo.classList.toggle("circulo-on");
});

const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  barraLateral.classList.toggle("max-barra-lateral");
  if (barraLateral.classList.contains("max-barra-lateral")) {
    menu.children[0].style.display = "none";
    menu.children[1].style.display = "block";
  } else {
    menu.children[0].style.display = "block";
    menu.children[1].style.display = "none";
  }
  if (window.innerWidth <= 320) {
    barraLateral.classList.add("mini-barra-lateral");
    main.classList.add("min-main");
    spans.forEach((span) => {
      span.classList.add("oculto");
    });
  }
});
