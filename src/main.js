import EndPage from "./EndPage.js";
import QuizPage from "./QuizPage.js";
import { init } from "./router.js";
import StartPage from "./StartPage.js";

export default function main({ $target }) {
  this.router = () => {
    const { pathname } = location;

    if (pathname === "/quiz") {
      new QuizPage({ $target: $target, selectNum: this.selectNum }).render();
    } else if (pathname === "/end") {
      new EndPage({ $target: $target }).render();
    } else {
      new StartPage({
        $target: $target,
        onClick: (index) => {
          this.selectNum = index;
        },
      }).render();
    }
  };

  init(this.router);
  this.router();

  window.addEventListener("popstate", this.router);
}
