// Constants

import { FONT_SIZE } from "./constants.js";

// Functions

// 1)

function* createIdGenerator() {
 let id = 1;
 while (true) {
  yield id++;
 }
}

export const idGenerator = createIdGenerator();

// 2)

function* newFontGenerator(fontSize) {
 let counter;
 while (true) {
  counter = yield fontSize;
  if (counter === "up") {
   fontSize += 2;
  }
  if (counter === "down") {
   fontSize -= 2;
  }
 }
}

export const fontGenerator = newFontGenerator(FONT_SIZE);
