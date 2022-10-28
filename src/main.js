import { requestList } from "./list.js";

const quiz = await requestList();

export default function main({ $target, selectNum }) {
  for (var i = 0; i < selectNum; i++) {
    var num = Math.floor(Math.random() * quiz.length);
    console.log(quiz[num].hurigana);
  }
}
