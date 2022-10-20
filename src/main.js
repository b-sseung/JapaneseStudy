import { requestList } from "./list.js";

export default function main({ $target, selectNum }) {
  const quiz = selectNum == "1" ? requestList("quiz1") : requestList("quiz2");
}
