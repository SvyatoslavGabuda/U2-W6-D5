const titolo = document.getElementById("titolo");
const body = document.querySelector("body");
const header = document.querySelector("header");
const divS = document.querySelectorAll("div");
const buttonS = document.querySelectorAll("button");
const liItems = document.querySelectorAll("li");
const ancore = document.querySelectorAll("a");
const crazyMode = function (e) {
  let random = Math.floor(Math.random() * 256);
  let random1 = Math.floor(Math.random() * 256);
  let random2 = Math.floor(Math.random() * 256);
  let random3 = Math.floor(Math.random() * 256);
  let random4 = Math.floor(Math.random() * 256);
  body.style.backgroundColor = `rgb(${random}, ${random1}, ${random2})`;
  header.style.backgroundColor = `rgb(${random3}, ${random1}, ${random2})`;
  body.style.color = `rgb(${random1}, ${random2}, ${random})`;
  divS.forEach((div) => {
    div.style.backgroundColor = `rgb(${random2}, ${random4}, ${random1})`;
    div.style.color = `rgb(${random1}, ${random2}, ${random})`;
  });

  buttonS.forEach((btn) => {
    btn.style.backgroundColor = `rgb(${random2}, ${random4}, ${random})`;
    btn.style.color = `rgb(${random1}, ${random2}, ${random4})`;
  });

  liItems.forEach((li) => {
    li.style.backgroundColor = `rgb(${random2}, ${random4}, ${random3})`;
    li.style.color = `rgb(${random1}, ${random2}, ${random})`;
  });
  ancore.forEach((a) => {
    a.style.color = `rgb(${random1}, ${random2}, ${random})`;
  });
};

titolo.addEventListener("click", crazyMode);

const btnVaiPartner = document.getElementById("vaiPartners");

const divPartner = document.getElementById("partner");
const vai1 = function () {
  divPartner.scrollIntoView();
};

btnVaiPartner.addEventListener("click", vai1);
const btnVaiCarusel = document.getElementById("vaiCarusel");
const carusel = document.getElementById("carusel");

const vai2 = function () {
  carusel.scrollIntoView();
};
btnVaiCarusel.addEventListener("click", vai2);
