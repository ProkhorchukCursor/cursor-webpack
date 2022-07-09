// Functions

import { idGenerator } from "./functions.js";

const result = `
    <p>idGenerator: ${idGenerator.next().value};</p>
`;

console.log(result);

const container = document.querySelector("#hw-12");

container.innerHTML = `<div>${result}</div>`;
