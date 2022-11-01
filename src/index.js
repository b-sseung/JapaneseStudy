import main from "./main.js";

const body = document.querySelector(".body");

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", (e) => {
    body.innerHTML = "";
    new main({
      $target: body,
      selectNum: parseInt(e.target.closest(".button").dataset.num),
    });
  });
});
