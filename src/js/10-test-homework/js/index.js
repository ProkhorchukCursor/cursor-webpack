import { getRandomChinese } from "./functions.js";

const container = document.querySelector("#hw-10");

getRandomChinese(4)
 .then((res) => {
  const div = document.createElement("div");
  div.innerHTML = `<p>${res}</p>`;
  console.log(res);
  container.appendChild(div);
 })
 .catch((rej) => console.log(rej));
