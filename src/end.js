export default function end({ $target }) {
  $target.innerHTML = `
    <div class="end-box">
      <div class="end">끝</div>
    </div>
  `;

  document.querySelector(".end-box").addEventListener("click", () => {});
}
