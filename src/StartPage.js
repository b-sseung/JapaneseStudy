import { routeChange } from "./router.js";

export default function StartPage({ $target, onClick }) {
  this.render = () => {
    $target.innerHTML = `
      <div class="buttonTitle">문제 개수를 선택해주세요.</div>
      <div class="buttonBox">
        <div class="button b1" data-num="5">05개</div>
        <div class="button b2" data-num="10">10개</div>
        <div class="button b3" data-num="15">15개</div>
        <div class="button b4" data-num="20">20개</div>
      </div>
    `;

    document.querySelectorAll(".button").forEach((button) => {
      button.addEventListener("click", (e) => {
        $target.innerHTML = "";
        onClick(parseInt(e.target.closest(".button").dataset.num));
        routeChange("/quiz");
      });
    });
  };

  this.render();
}
