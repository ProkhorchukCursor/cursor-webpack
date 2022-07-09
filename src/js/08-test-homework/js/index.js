// HTML-elements

import { generateBlocksButtonEl, generateBlocksResultEl } from "./elements.js";

// Constants

import { TIME, CLASS_START } from "./constants.js";

// Functions

import { generateBlocks, handleStartFunc } from "./functions.js";

// EventListeners

// 1)

let timer = null;

generateBlocksButtonEl.addEventListener("click", () => {
 handleStartFunc(generateBlocksButtonEl);

 if (generateBlocksButtonEl.className !== CLASS_START)
  return clearInterval(timer);

 generateBlocks(generateBlocksResultEl);
 timer = setInterval(() => generateBlocks(generateBlocksResultEl), TIME);
});
