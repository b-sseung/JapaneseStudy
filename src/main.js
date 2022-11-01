import end from "./end.js";
import { requestList } from "./list.js";

const quiz = await requestList();

export default function main({ $target, selectNum }) {
  this.hurigana = new Array();
  this.answer = new Array();

  for (var i = 0; i < selectNum; i++) {
    var num = Math.floor(Math.random() * quiz.length);
    this.hurigana[i] = quiz[num].hurigana;
    this.answer[i] = quiz[num].answer;
  }

  this.index = 0;

  this.render = () => {
    $target.innerHTML = `
      <div class="situation">진행상황 : ${
        this.index + 1
      }개 / ${selectNum}개</div>
      <div class="word-box">
        <div class="word">${this.hurigana[this.index]}</div>
      </div>
      <div class="next-box">
        <div class="next">정답 확인</div>
      </div>
    `;

    this.situation = document.querySelector(".situation");
    this.word = document.querySelector(".word");
    this.next = document.querySelector(".next");

    this.next.addEventListener("click", (e) => {
      if (e.target.innerText === "정답 확인") {
        this.next.innerHTML = "다음";
        this.word.innerHTML = this.answer[this.index];
      } else {
        this.index++;
        if (this.index === selectNum) {
          new end({ $target: $target });
        } else {
          this.render();
        }
      }
    });
  };

  this.render();
}
