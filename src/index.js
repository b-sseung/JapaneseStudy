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

// document.querySelector(".b1").addEventListener("click", (e) => {
//   body.innerHTML = "";
//   new main({ $target: body, selectNum: "5" });
// });

// document.querySelector(".b2").addEventListener("click", (e) => {
//   body.innerHTML = "";
//   new main({ $target: body, selectNum: "10" });
// });

// document.querySelector(".b3").addEventListener("click", (e) => {
//   body.innerHTML = "";
//   new main({ $target: body, selectNum: "quiz2" });
// });

// document.querySelector(".b4").addEventListener("click", (e) => {
//   body.innerHTML = "";
//   new main({ $target: body, selectNum: "quiz2" });
// });
