const url = "https://my-json-server.typicode.com/b-sseung/JapaneseStudy/";

export const requestList = async (key) => {
  try {
    const res = fetch(`${url}${key}`);
    return await res.json();
  } catch (e) {
    new Error(e);
  }
};
