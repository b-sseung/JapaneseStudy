// const url = "https://my-json-server.typicode.com/b-sseung/JapaneseStudy";
// const url = "http://localhost:3000";
// const url = "https://b-sseung.github.io/JapaneseStudy/db.json";
const url = location.origin + "/db.json";

export const requestList = async () => {
  try {
    let result;
    const res = await fetch(`${url}`)
      .then((response) => response.json())
      .then((json) => (result = json.quiz));
    return result;
  } catch (e) {
    new Error(e);
  }
};
