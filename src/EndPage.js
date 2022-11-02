import { routeChange } from "./router.js";

export default function EndPage({ $target }) {
  this.render = () => {
    $target.innerHTML = `
      <div class="end-box">
        <div class="end">끝</div>
      </div>
    `;

    document.querySelector(".end-box").addEventListener("click", () => {
      routeChange("/");
    });
  };

  this.render();
}
