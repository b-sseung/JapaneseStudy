// const url = "https://my-json-server.typicode.com/b-sseung/JapaneseStudy";
const url = "http://localhost:3000";

export const requestList = async () => {
  try {
    const res = await fetch(`${url}/quiz`);
    return await res.json();
  } catch (e) {
    new Error(e);
  }
};
