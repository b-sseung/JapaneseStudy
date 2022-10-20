import main from "./main.js";

const body = document.querySelector(".body");

document.querySelector(".b1").addEventListener("click", (e) => {
  body.innerHTML = "";
  new main(body, "1");
});

document.querySelector(".b2").addEventListener("click", (e) => {
  body.innerHTML = "";
  new main(body, "2");
});
